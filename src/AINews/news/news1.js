import React from 'react';
import { enquireScreen } from 'enquire-js';
import '../less/pb.css';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { location } = window;

export default class news1 extends React.Component{
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
            <h1>这个中国科学家的救命AI，登上了国外热门榜</h1>
            <div className="dl"/>
            <blockquote><p>郭一璞 发自 凹非寺<br/>
                量子位 报道 | 公众号 QbitAI</p></blockquote>
            <div className="dl"/>
            <p>总是送别人上热搜的微博，今天它自己上热搜了。</p>
            <p>一个借助微博挽救自杀者的团体登上了“美国科技热搜榜”Techmeme，这个志愿者团队“树洞救援团”使用AI技术，分析微博上的言论，自动发现可能要自杀的人，之后通过各种方式挽救他们的生命。</p>
            <p>不少国外网友都纷纷称赞这一正能量行动。有人赞叹，在讨论AI技术的各种声音中，中国的这个应用找到了非常棒的用处：</p>
            <div className="pgc-img"><img className="pgc-img" src="http://p3.pstatp.com/large/pgc-image/8dcb9a84ebbc42c49d2e372eb572ead4"/>
            </div>
            <p>这也是AI有助于社会的一种方式，它帮助了抑郁症患者：</p>
            <div className="pgc-img"><img className="pgc-img" src="http://p1.pstatp.com/large/pgc-image/65982f9453f74303a34f0a93d51d1b83"/>
            </div>
            <div className="dl"/>
            <h2><strong>树洞救援团</strong></h2>
            <p>在微博这个庞大的平台上，总有一些隐秘的文字，可以发表在不被注视的角落里，成为倾诉的树洞。</p>
            <p>这其中，尤其是一些已经过世的人的微博，因为不会有人注意到留言，所以评论区成了倾诉痛苦之处。</p>
            <p>比如这个名叫“走饭”的微博，它的最后一条微博是主人的遗言。</p>
            <div className="pgc-img"><img src="http://p3.pstatp.com/large/pgc-image/9c84e5ed046f42628d1e840ce43d4dc5"/>
            </div>
            <p>此情此景让人感伤，因此一些网友感到痛不欲生的时候，会选择来这条微博下留言。其中，也有人会流露出自杀倾向，但并不会引人注意。</p>
            <p>来自荷兰阿姆斯特丹自由大学计算机科学系的研究员黄智生教授，偶然间看到了关于微博树洞的报道，于是组织了针对这些微博树洞的“树洞救援团”，用AI技术手段分析留言内容，并集中了数百名有心理学相关资质的专业救援人员，在发现有人准备自杀时进行联络干预，联系他们的家人朋友，进行心理疏导，帮助挽回他们的生命。</p>
            <div className="pgc-img"><img src="http://p1.pstatp.com/large/pgc-image/4272f5f4a7ff4aac974d009464762371"/>
            </div>
            <p>他们的第一次救援是在去年4月。</p>
            <p>当时，树洞救援团发现了一名女大学生在微博中说“男孩子跟我在一起也只是想玩一玩……我不配活在这个世界上”。似乎女生遇到了感情问题，于是他们迅速找到了女生前男友的联系方式，通过他找到了这名女生的手机号码，并通知了女生所就读的学校。</p>
            <p>救援团和女生联络上之后，加了微信。救援人员的嘘寒问暖，让女生平复了心情，没有选择离开这个世界。</p>
            <p>之后，树洞救援团也救援了许多因为疾病、经济问题、感情问题想要自杀的人，从去年到今年一年多的时间里，树洞救援团已经组织营救了近千次自杀，去掉其中那些一而再再而三的安利，共挽回了700多条生命。</p>
            <div className="dl"/>
            <h2><strong>黄智生的技术探索</strong></h2>
            <p>微博树洞中的留言那么多，进行有效的监测是件难事，比如微博限制3000条的反爬虫策略，就是一道难关。</p>
            <p>一开始，黄智生教授先是在微信大群里发起了一场AI技术挑战赛，先是从微博中抓取百万条数据，作为训练机器学习模型的数据集，这里必须突破微博反爬虫机制，500人大群众只有4个团队完成了这项任务。</p>
            <p>之后，需要把爬来的数据处理成半结构化数据，并构建知识图谱，在此时，挑战赛中的团队已经力不从心了。</p>
            <p>在此之后，黄智生也亲自下场参与了起来，去年七月正式推出了树洞机器人001号，后来在去年年底迭代到了004号，能够自动报告检测到的有自杀倾向的人。</p>
            <div className="pgc-img"><img src="http://p1.pstatp.com/large/pgc-image/30a0abe812344c43af14ea8b5339f1be"/>
            </div>
            <p>在黄智生的判断体系中，将自杀风险分为了0~10级，如果到了9或者10，树洞救援团的志愿者会直接联系警察，或者联系有自杀倾向者的亲朋；如果分数等级低于6，一般不会进行干预。</p>
            <div className="dl"/>
            <h2><strong>国外社交媒体的举措</strong></h2>
            <p>诸多社交媒体，其实都有针对自杀倾向的干预措施，比如在知乎搜“自杀”，会弹出求助热线。</p>
            <div className="pgc-img"><img src="http://p1.pstatp.com/large/pgc-image/db3402f3faad4e9aa2e2e404d1a2e05b"/>
            </div>
            <p>而在国外，Facebook也有监测自杀倾向内容的功能，借助AI技术标记潜在自杀用户，并在必要情况下通知自杀倾向者的朋友，或联系当地救援机构。</p>
            <p>另一大社交媒体Twitter也曾经和慈善机构合作，监测用户的状态，一旦发现自杀倾向就会发来警报。</p>
            <p>参考链接：<br/>
                https://www.ellemen.com/living/a29140271/shudong-190920/<br/>
                https://www.cs.vu.nl/~huang/<br/>
                https://www.bbc.com/zhongwen/simp/science-50313320<br/>
                https://mp.weixin.qq.com/s/AZyU_dvGlZd_HSk5XHnnqQ<br/>
                https://zhuanlan.zhihu.com/p/80656048</p>
            <div className="line_font"><span/><em>版权所有，未经授权不得以任何形式转载及使用，违者必究。</em><span/></div>
            <div className="dl"/>
        </div>
        )
    }

}
