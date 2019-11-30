import React from 'react';
import { enquireScreen } from 'enquire-js';
import '../less/pb.css';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { location } = window;

export default class news4 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port, // 如果不是 dva 2.0 请删除
        };
    }
    componentDidMount() {
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
        if (location.port) {
            // 样式 build 时间在 200-300ms 之间;
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
    }
    render() {
        return(
            <div className="article">
                <div className="dl"/>
                <h1>中文预训练模型ZEN开源，效果领域内最佳，创新工场港科大出品</h1>
                <div className="dl"/>
                <blockquote className="article-blockquote-first"><p>允中 发自 凹非寺</p></blockquote>
                <blockquote className="article-blockquote-first"><p>量子位 报道 | 公众号 QbitAI</p></blockquote>
                <div className="dl"/>
                <p className="ql-align-justify">改进策略简单有效、收敛速度快，同时小数据效果出色。</p>
                <p className="ql-align-justify">这就是<strong>中文预训练模型ZEN</strong>。</p>
                <p className="ql-align-justify">在中文任务中，ZEN不仅性能优于BERT，也比之前中文预训练模型更好。</p>
                <p className="ql-align-justify">可以说是目前全球中文领域最佳预训练模型。</p>
                <p className="ql-align-justify">而且现在，ZEN开源了。源代码和训练好的模型均已发布，未来还承诺会有更大数据和其他语言版本迭代上新。</p>
                <p className="ql-align-justify">详情我们展开往下说。</p>
                <div className="pgc-img"><img alt="中文预训练模型ZEN开源，效果领域内最佳，创新工场港科大出品"
                                              src="http://p9.pstatp.com/large/pgc-image/dd4b43a729f84c75a94bf8fa7088e2f3"/>
                </div>
                <div className="dl"/>
                <h2 className="ql-align-justify"><strong>ZEN因何而生</strong></h2>
                <p className="ql-align-justify">随着BERT（Devlin et al.,
                    2018）等一系列预训练模型的出现，该类型上下文相关表征方法受到了自然语言处理领域持续大范围的关注。</p>
                <p className="ql-align-justify">这些预训练模型带来的好处是显而易见：</p>
                <p className="ql-align-justify">一方面，它们可以利用大规模无标注纯文本语料进行学习；</p>
                <p className="ql-align-justify">另一方面，它们是对于文本的有效表征，并且大量实验表明，基于预训练模型的各类NLP模型相比于以前的方法能带来巨大的性能提升。</p>
                <p className="ql-align-justify">一般来说，预训练模型研究通常分为两个步骤：第一步是预训练 (pre-training)，第二步是微调整 (fine-tune)。</p>
                <p className="ql-align-justify">其中，<strong>预训练</strong>是指通过在大规模无标注的语料上进行无监督训练，来学习通用的语言表达和上下文行文特点。</p>
                <p className="ql-align-justify"><strong>微调整</strong>指在特定的任务上，再次利用任务数据训练和调整预训练模型参数的过程。</p>
                <p className="ql-align-justify">目前，大多数中文预训练模型基本上沿用了英文模型的做法，聚焦于小颗粒度文本单元（字）的输入。</p>
                <p className="ql-align-justify">然而，与英文相比，中文没有空格等明确的词语边界。</p>
                <p className="ql-align-justify">这个特点使得很多文本表达中存在的交叉歧义也被带入了以字为序列的文本编码中，使得模型更难从单字的序列中学习到大颗粒度文本蕴含的语义信息，例如双字或者多字词的整体含义等。</p>
                <p className="ql-align-justify">虽然通过大规模文本建模可以一定程度上区分不同上下文环境的语义，但是依然没有充分并显式地利用预训练和微调整语料中经常出现的词、短语、实体等更大颗粒度的信息。</p>
                <p className="ql-align-justify">目前很多模型的解决方法依然是遵循传统BERT模型的遮盖（masking）策略，例如采用多层（词，短语等）遮盖策略来弥补这一缺陷。</p>
                <p className="ql-align-justify">然而遮盖策略依然只是一种弱监督学习方法，用于学习词边界信息含有诸多问题：</p>
                <ul>
                    <li className="ql-align-justify">第一，信息的质量无法得到保证，例如BERT-wwm（Cui et al., 2019）的效果依赖于外部中文分词的质量；</li>
                    <li className="ql-align-justify">第二，因为基于遮盖方式训练存在一个基础难题，即遮盖过程在训练中存在，但是在测试过程中并不存在，因此直接利用遮盖方式学习的词和短语信息会导致训练和测试过程的不匹配。</li>
                </ul>
                <p className="ql-align-justify">因此，如果能够有效集成大颗粒度文本的信息，并且在训练和测试过程中显式地加入这样的信息将有助于提升模型的表征能力。</p>
                <p className="ql-align-justify">于是，基于BERT的n-gram增强中文文本编码器ZEN，由此而生。</p>
                <p className="ql-align-justify">它可以显式地结合潜在词语的边界信息来帮助模型更好地对文本进行表征。ZEN有两大优势：</p>
                <p className="ql-align-justify"><strong>简单有效。</strong>从数据上看，与其他模型引入更多数据不同，ZEN仅仅基于中文维基百科进行训练。</p>
                <p className="ql-align-justify">ZEN不需要更多的数据集，但是却显示出了与其他模型相当的效果。从模型上看，引入n-gram编码器的方式简单灵活，不需要其他繁杂的预训练优化方式。</p>
                <p className="ql-align-justify"><strong>收敛迅速。</strong>因为模型结构简单，实验表明相比于原生BERT,ZEN模型收敛速度明显提高，在更短的时间内取得了更好的效果。这对于资源紧张的研究人员来讲，无疑是一个好消息。
                </p>
                <p className="ql-align-justify">另外，在涵盖词汇级和句子级两个层级的七大经典中文语言处理任务中——包括中文分词（CWS），词性标注（POS），命名实体识别（NER），文本分类（DC），情感分类（SA），语义匹配（SPM），自然语言推理（NLI），ZEN在七个下游任务上都带来了显著的提升。同时本文还在小规模数据集上进行了实验，模拟了只有少量预训练数据语料的场景。</p>
                <p className="ql-align-justify">而且ZEN如此效果，也展示了未来应用到其他文本受限领域的潜力，比如医疗。</p>
                <p className="ql-align-justify">同时，该研究中加入大颗粒度文本的方式是一种通用的增强方式，未来可在中文之外的其他语言上也得到应用。</p>
                <div className="dl"/>
                <h2 className="ql-align-justify"><strong>具体模型</strong></h2>
                <p className="ql-align-justify">ZEN的模型架构如图所示：</p>
                <div className="pgc-img"><img alt="中文预训练模型ZEN开源，效果领域内最佳，创新工场港科大出品"
                                              src="http://p3.pstatp.com/large/pgc-image/ae0c3ac8542c4fc1b71280d33b21b217"/>
                </div>
                <div className="dl"/>
            </div>
        )
    }

}
