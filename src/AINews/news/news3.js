import React from 'react';
import { enquireScreen } from 'enquire-js';
import '../less/pb.css';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { location } = window;

export default class news3 extends React.Component{
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
                <h1>索尼大法要专门开始搞AI了，成立Sony AI，发力游戏、影像和美食</h1>
                <div className="dl"/>
                <p data-pm-slice="0 0 []">今天，索尼成立了一个名为Sony
                    AI的组织，该组织将会从事人工智能方面的研究和开发。索尼发布的公告中表示，新组织将会在日本、美国和欧洲建立办公室。在项目初期阶段，他们将在游戏、影像和传感以及“美食”等领域推出项目。</p>
                <div className="pgc-img"><img data-height="241" data-ic="false" data-ic-uri="" data-width="700"
                                              src="https://p6-tt.byteimg.com/large/pgc-image/24afe96313c94bffa3635a5816100c9f"/>
                </div>
                <p>新成立的索尼AI未来将率先启动的三个旗舰项目，分别为游戏、影像传感与美食，借助AI技术来帮助索尼现有的游戏和硬件实现增值。</p>
                <p>在游戏方面，AI的加入能够帮助开发人员在发行前更快的实现游戏测试。此外，机器学习亦能为游戏内提供有效的分析工具，使开发人员可以研究玩家的行为，甚至使游戏设计更为自动化。</p>
                <p>至于影像传感业务，索尼有引以为傲的CMOS图像传感器，人工智能显然将放大索尼硬件产品的能力。</p>
                <p>尽管对美食领域比较陌生，但索尼早有布局。去年4月，索尼宣布与美国卡内基梅隆大学签署合同，计划共同研发搭载人工智能的“烹饪机器人(Robot
                    Gastronomy)”，这种机器人将负责从菜单选择到烹饪、上菜、送餐的一系列流程。</p>
                <p>在这份公告中，索尼表示：“在这些旗舰项目中使用新的人工智能技术，对于索尼在未来今年中进一步提升游戏和传感器业务有着至关重要的价值。”</p>
                <div className="line_font"><span/><em>版权所有，未经授权不得以任何形式转载及使用，违者必究。</em><span/></div>
                <div className="dl"/>
            </div>
        )
    }

}
