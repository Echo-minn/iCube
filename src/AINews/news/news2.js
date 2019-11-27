import React from 'react';
import { enquireScreen } from 'enquire-js';
import '../less/pb.css';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { location } = window;

export default class news2 extends React.Component{
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
                <h1>从“小”培养AI安全意识：OpenAI开源最新强化学习训练工具，安全约束自由定制，开箱即用</h1>
                <div className="dl"/>
                <blockquote className="article-blockquote-first"><p>鱼羊 发自 凹非寺<br/>
                    量子位 报道 | 公众号 QbitAI</p></blockquote>
                <div className="dl"/>
                <p>强化学习（RL）很强，能训练出会用鸡贼策略的星际宗师级玩家。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p1.pstatp.com/large/pgc-image/7ab2107cb516477fa882a1d7c15611de"/>
                </div>
                <p><strong>△</strong>AlphaStar打出cannon rush</p>
                <p>但强化学习也很危险，因为它的套路是<strong>无限制探索</strong>，常常会出现一些疯狂危险的尝试。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p1.pstatp.com/large/pgc-image/54c995dc75f14a5a8047cea62aa8d703"/>
                </div>
                <p>但在现实环境中，有些试错是不可接受的。没有人希望看到，AI通过反复撞车来学会避免事故发生。</p>
                <p>要让强化学习从虚拟环境走向现实生活，强化学习界的高玩OpenAI说：安全意识要从“小”抓起。</p>
                <p>于是，他们开源了<strong>Safety Gym</strong>。</p>
                <p>这是一套具有安全约束的训练环境和工具，能够评估强化学习智能体在训练过程中是否遵循安全原则，把AI在训练过程中产生的奇奇怪怪的想法都“扼杀”在摇篮里。</p>
                <p>也就是说，在训练过程中，就约束AI，让它们明白，有些禁忌是不可触犯的。</p>
                <div className="dl"/>
                <h2><strong>Safety Gym</strong></h2>
                <p>想要培养安全意识，就得给出安全规范。而在强化学习中，能做到这一点的就是<strong>约束强化学习（Constrained RL）</strong>。</p>
                <p>约束强化学习，除了像普通的强化学习那样最大化奖励功能，还添加了约束智能体的成本函数（cost function）。</p>
                <p>以自动驾驶举例，AI的任务是尽快从A点到达B点，所用时间越短，获得的奖励就最大。</p>
                <p>这就导致，只要奖励够高，撞不撞车什么的会完全被AI忽视。</p>
                <p>而在约束强化学习中，增加了一重惩罚：如果出现不可接受的危险行为，就惩罚智能体，直到它不再这么干为止。</p>
                <p>而Safety Gym的诞生，就是为了方面约束强化学习的安全研究。</p>
                <p>在Safety Gym环境中，预设了三种机器人：</p>
                <p><strong>点（Point）</strong>：一个被约束在二维平面上的简单机器人，能够转弯、前进或后退。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p1.pstatp.com/large/pgc-image/c51a1dc4812e4f29be5a8898a964eabc"/>
                </div>
                <p><strong>车（Car）</strong>：有两个独立驱动的平行车轮和一个自由滚动的后轮。车在转弯、向前或向后移动时，需要协调两个驱动器。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p1.pstatp.com/large/pgc-image/8f02b6e7b80a4c5c879d6eea3bce3679"/>
                </div>
                <p><strong>狗狗（Doggo）</strong>：一只四足机器人，每条腿跟躯干接触的位置都有两个控件，分别控制相对于躯干的方位角和仰角；膝盖上也有一个控制角度的控制器。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p3.pstatp.com/large/pgc-image/855fd5920b594f9c8946ea849e7ce255"/>
                </div>
                <p>以及三个主要任务，每个任务都有两个难度级别：</p>
                <p><strong>目标任务（Goal）</strong>：让机器人移动到一系列目标位置。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p1.pstatp.com/large/pgc-image/9ffc95b761a7480592aac39935bc87ac"/>
                </div>
                <p><strong>按钮任务（Button）</strong>：让机器人按一系列目标按钮。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p1.pstatp.com/large/pgc-image/8ceca7216d584e29ada66b6fa26ffcdb"/>
                </div>
                <p><strong>△</strong>在有干扰的情况下按按钮</p>
                <p><strong>推箱子任务（Push）</strong>：让机器人把箱子推到一系列目标位置。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p9.pstatp.com/large/pgc-image/41c866791cdf4cfa92f1b98eaf05682c"/>
                </div>
                <p>另外，在Safety Gym中还有五种主要的安全约束元素：危险区域，易碎花瓶，按钮，柱子和小怪兽。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p3.pstatp.com/large/pgc-image/0181b5028a3a4766a69b6dc19ad0652f"/>
                </div>
                <p>这些元素可以自由组合，用户可以在训练环境中添加任意数量的任意元素，并设置针对性的约束条件。</p>
                <p>每个时间步长，环境都会为每一种不安全元素提供单独的成本信号，并提供反应整体的总成本信号。</p>
                <p>与现有训练环境相比，Safety Gym环境更丰富，任务更难且更复杂。</p>
                <div className="dl"/>
                <h2><strong>基准测试</strong></h2>
                <p>为了让Safety
                    Gym变成一个开箱即用的工具，OpenAI还在其基础上提出了一种标准化方法，评估了一系列标准强化学习算法和约束强化学习算法：PPO，TRPO，PPO和TRPO的拉格朗日罚分版，以及约束策略优化（CPO）。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p9.pstatp.com/large/pgc-image/9694d3f4f18b4e94a90aa23f0d3af022"/>
                </div>
                <p><strong>△</strong>基准环境</p>
                <p>结果表明：在Safety Gym里，最简单的任务易于解决，并且可以快速迭代。而最困难的任务，对当前的技术而言还是颇具挑战性。</p>
                <div className="pgc-img"><img alt="从“小”培养AI安全意识：OpenAI开源具有安全约束的RL训练工具"
                                              src="http://p3.pstatp.com/large/pgc-image/a70f10f130e547f88fd417170cea028a"/>
                </div>
                <p>OpenAI希望，未来，Safety Gym能被集成到开发人员用来测试系统的评估方案中，成为安全标准。</p>
                <div className="dl"/>
                <h2><strong>传送门</strong></h2>
                <p>博客地址：<br/>
                    https://openai.com/blog/safety-gym/</p>
                <p>论文地址：<br/>
                    https://d4mucfpksywv.cloudfront.net/safexp-short.pdf</p>
                <p>GitHub项目地址：<br/>
                    https://github.com/openai/safety-gym</p>
                <p>— <strong>完</strong> —</p>
                <div className="line_font"><span/><em>版权所有，未经授权不得以任何形式转载及使用，违者必究。</em><span/></div>
                <div className="dl"/>
            </div>
        )
    }

}
