import React from 'react';
import { enquireScreen } from 'enquire-js';
import '../less/pb.css';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { location } = window;

export default class News0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port, // 如果不是 dva 2.0 请删除
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
        // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
        /* 如果不是 dva 2.0 请删除 start */
        if (location.port) {
            // 样式 build 时间在 200-300ms 之间;
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
        /* 如果不是 dva 2.0 请删除 end */
    }

    render() {
        return (
            <div className="article">
                <div className="dl"/>
                <h2>谷歌大脑开源「数据增强」新招数：ImageNet准确率达85%，大神Quoc Le出品</h2>
                <div className="dl"/>
                <blockquote className="article-blockquote-first"><p>十三 发自 凹非寺<br/>
                    量子位 报道 | 公众号 QbitAI</p></blockquote>
                <div className="dl"/>
                <p>你的数据还不够强。</p>
                <p>玩深度学习的人都知道，AI算法大部分是<strong>数据驱动</strong>。数据的质量一定程度上决定了模型的好坏。</p>
                <p>这就有了深度学习天生的一个短板：<strong>数据不够多、不够好</strong>。</p>
                <p>而<strong>数据增强</strong>就是解决这一问题的有效办法。</p>
                <p>谷歌大脑去年提出了自动数据增强方法(AutoAugment)，确实对图像分类和目标检测等任务带来了益处。</p>
                <p>但缺点也是明显的：</p>
                <blockquote className="article-blockquote"><p>1、大规模采用这样的方法会增加训练复杂性、加大计算成本；</p>
                    <p>2、无法根据模型或数据集大小调整正则化强度。</p></blockquote>
                <p>于是乎，谷歌大脑团队又提出了一种数据增强的方法——<strong>RandAugment</strong>。</p>

                <div className="pgc-img"><img alt="是你的数据还不够强！谷歌大脑「数据增强」开源，大神QuocLe出品"
                                              src="http://p3.pstatp.com/large/pgc-image/bfbcb253a5ac4941b2bffe3fd055c846"/>
                </div>
                <p>这个方法有多好？</p>
                <div className="pgc-img"><img alt="是你的数据还不够强！谷歌大脑「数据增强」开源，大神QuocLe出品"
                                              src="http://p9.pstatp.com/large/pgc-image/aff507d881754671a580e506fa14bcf3"/>
                </div>
                <p>谷歌大脑高级研究科学家Barret Zoph表示：</p>
                <blockquote className="article-blockquote"><p>RandAugment是一种新的数据增强方法，比AutoAugment简单又好用。</p>
                    <p>主要思想是随机选择变换，调整它们的大小。</p></blockquote>
                <p>最后的实验结果表明：</p>
                <p>1、在ImageNet数据集上，实现了85.0%的准确率，比以前的水平提高了0.6%，比基线增强了1.0%。</p>
                <p>2、在目标检测方面，RandAugment能比基线增强方法提高1.0-1.3%。</p>
                <p>值得一提的是，这项研究的通讯作者是谷歌AutoML幕后英雄的Quoc Viet Le大神。</p>
                <div className="dl"/>
                <div className="pgc-img"><img alt="是你的数据还不够强！谷歌大脑「数据增强」开源，大神QuocLe出品"
                                              src="http://p1.pstatp.com/large/pgc-image/3822f7c3a16f439dafa447832469a78c"/>
                </div>
                <div className="dl"/>
            </div>
        );
    }
}
