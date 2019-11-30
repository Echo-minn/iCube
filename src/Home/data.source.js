import React from 'react';
const url_video = 'https://couseraccess.oss-cn-beijing.aliyuncs.com/videos/%5B%E9%AB%98%E6%B8%85%201080P%5D%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%EF%BC%88Machine%20Learning%EF%BC%89-%20%E5%90%B4%E6%81%A9%E8%BE%BE%EF%BC%88Andrew%20Ng%EF%BC%89_P2_1%20-%202%20-%20Welcome%E3%80%90%E4%B8%AD%E8%8B%B1%E3%80%91.mp4';
const url_video_cover = '../imgs/video.png';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://couseraccess.oss-cn-beijing.aliyuncs.com/images/logo2.png',
    href:"/iTeam",
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                  <>
                    <p>Home</p>
                  </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/AILab',
          children: [
            {
              children: (
                <>
                  <p>AI Lab</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '/AIResearch',
          children: [
            {
              children: (
                <>
                  <p>AI Research</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '/AIPaper',
          children: [
            {
              children: (
                <>
                  <p>AI Papers</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
      name: 'item1',
      className: 'header0-item',
      children: {
        href: '/login',
        children: [
          {
            children: (
                <>
                  <p><b>你好！</b></p>
                </>
            ),
            name:'text'
          },
        ],
      },
    },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper k34jqn138i-editor_css' },
  title: {
    className: 'banner0-title k34jphn9fjf-editor_css',
    children: (
      <>
        <blockquote>iCube for Fun</blockquote>
      </>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <>
        <p>
          iCube which is an Ai Cube that you can learn some amazing things with
          Ai and enjoy yourself. There are serval cubes which contain simple but
          interesting things with AI like AiLab, AiNews, AiResearch.&nbsp;
        </p>
      </>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' ,href:"/AILab"},
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0 k34k7femq0k-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>HAVE FUN WITH AI</p>
          </>
        ),
        className: 'k34k32lya7-editor_css',
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>AI Classes</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>Basic Concepts, Lastest Papers, History</p>
                  <p>Display Vedios</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>AI Lab</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>Why not have a try?</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <>
                  <p>AI Research</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>Headlines about AI</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>AI Classes</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: '科技想象力，金融创造力',
      },
    ],
  },
  video: {
    className: 'content4-video',
    children: {
      video: url_video,
      image: url_video_cover,
    },
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>AI news</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '如果你要掌握它，那么最好了解世界上其它人的进度。',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/photo1535168135836-1535168135836979040191-e1574225968671.jpg',
          },
          content: { children: '谷歌大脑开源「数据增强」新招数：ImageNet准确率达85%大神Quoc出品' },
          href:'/AINews/News0',
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/8dcb9a84ebbc42c49d2e372eb572ead4-e1573967131446.jpeg',
          },
          content: {
            children: '这个中国科学家的救命AI，登上了国外热门榜' },
          href:'/AINews/News1',
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/safety-gym-cover-e1574395603877.png',
          },
          content: { children: '从“小”培养AI安全意识：OpenAI开源最新强化学习训练工具，安全约束自由定制' },
          href:'/AINews/News2',
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/0c8e251deb11b5d-e1574325632470.png',
          },
          content: {
            children: '索尼大法要专门开始搞AI了，成立Sony AI，发力游戏、影像和美食'},
          href:'/AINews/News3',
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/ae0c3ac8542c4fc1b71280d33b21b217-e1572931644421.jpeg',
          },
          content: { children: '中文预训练模型ZEN开源，效果领域内最佳，创新工场港科大出品'},
          href:'/AINews/News4',
      },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/640-166-e1574314027281.jpeg',
          },
          content: { children: '对话CMU计算机新任院长：看好AI交叉创新出成果'},
          href:'/AINews/News5',
      },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/-e1574140269843.jpg',
          },
          content: { children: '何恺明最新一作论文：无监督胜有监督，迁移学习无压力，刷新7项检测分割任务' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/WechatIMG106-e1574050484863.jpeg',
          },
          content: { children: '陆奇首批YC中国门徒：包鱼塘、搞汽配、画动漫…都用AI' },
        },
      },
      {
         name: 'block8',
         className: 'block',
         md: 6,
         xs: 24,
         children: {
           wrapper: { className: 'content5-block-content' },
             img: {
               children:
                'https://www.qbitai.com/wp-content/uploads/2019/11/-2019-11-22-下午2.01.56-e1574402877698.png',
             },
           content: { children: 'Keras更新：在模型内部就能实现文本预处理' },
          },
      },
      {
          name: 'block9',
          className: 'block',
          md: 6,
          xs: 24,
          children: {
              wrapper: { className: 'content5-block-content' },
              img: {
                  children:
                      'https://www.qbitai.com/wp-content/uploads/2019/11/mlperf-e1573446681752.png',
              },
              content: { children: 'MLPerf发布首个AI芯片推理测试排行榜：阿里平头哥含光800获得多项第一' },
          },
      },
      {
          name: 'block10',
          className: 'block',
          md: 6,
          xs: 24,
          children: {
              wrapper: { className: 'content5-block-content' },
              img: {
                  children:
                      'https://www.qbitai.com/wp-content/uploads/2019/11/-2019-11-06-上午10.47.30-e1573008476685.png',
              },
              content: { children: '自动驾驶汽车加入“第六感”，MIT用AI预测在路口被撞风险，事故率降低7成以上' },
          },
      },
      {
        name:'block11',
        className:'block',
        md: 6,
        xs: 24,
        children: {
            wrapper: { className: 'content5-block-content' },
            img: {
              children:
              'https://www.qbitai.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-04-at-3.30.22-PM.png',
            },
            content: { children: '81页计算机视觉学习指南，事无巨细，助你从萌新长成老司机' },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
              <h1><b>AI Lab</b></h1>
          </>
        ),
        className: 'title-h1',
        href:'/AILab',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '为什么不亲自动手试试呢，Coding yourself。',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '图像分析' },
          content: {
            className: 'content3-content',
            children:
              '提取感兴趣区，用预先制作的感兴趣区掩模与待处理图想相乘，得到感兴趣图像，感兴趣内图像值保持不变，而区外图像值都为0.\n' +
                '屏蔽作用，用掩模对图像上某些区域作屏蔽，使其不参加处理或不参加处理参数计算，或进队屏蔽区做处理统计。\n' +
                '结构特征提取，用相似性变量或图像匹配方法检测和图像中与淹没相似的结构特征。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '风格转换' },
          content: {
            className: 'content3-content',
            children:
              '我也可以有梵高梦。在神经网络之前，图像风格迁移的程序有一个共同的思路：分析某一种风格的图像，给那一种风格建立一个数学或者统计模型，再改变要做迁移的图像让它能更好的符合建立的模型。这样做出来效果还是不错的，比如下面的三张图中所示，但一个很大的缺点：一个程序基本只能做某一种风格或者某一个场景。\n' ,
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '颜值打分' },
          content: {
            className: 'content3-content',
            children:
                '在中文维基百科中，强化学习被定义为机器学习中的一个领域，强调如何基于环境而行动，以取得最大化的预期收益 wikipedia。Richard S. Sutton and Andrew G. Barto 最新的强化学习书籍《Reinforcement Learning: An Introduction II》中对强化学习的定义为: Reinforcement learning is learning what to do—how to map situations to actions——so as to maximize a numerical reward signal.',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '语音识别' },
          content: {
            className: 'content3-content',
            children:
              '自动语音识别是一种将口头语音转换为实时可读文本的技术。自动语音识别也称为语音识别(Speech Recognition)或计算机语音识别(Computer Speech Recognition)。自动语音识别是一个多学科交叉的领域，它与声学、语音学、语言学、数字信号处理理论、信息论、计算机科学等众多学科紧密相连。由于语音信号的多样性和复杂性，目前的语音识别系统只能在一定的限制条件下获得满意的性能，或者说只能应用于某些特定的场合。自动语音识别在人工智能领域占据着极其重要的位置。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '强化学习' },
          content: {
            className: 'content3-content',
            children:
                '你的美丽只有我知道。 \n主要算法——基于面像数据稀疏表示的颜值评估模型\n' +
                '（Beauty Assessment Model For Data Of Face Based On Sparse Representation）\n人脸识别与面部提取、投票打分器以及图片库数据、基于HOG及SVM的性别分类\n',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '模式识别' },
          content: {
            className: 'content3-content',
            children:
              'Pattern recognition is the automated recognition of patterns and regularities in data. Pattern recognition is closely related to artificial intelligence and machine learning,[1] together with applications such as data mining and knowledge discovery in databases (KDD). However, these are distinguished: machine learning is one approach to pattern recognition, while other approaches include hand-crafted (not learned) rules or heuristics; and pattern recognition is one approach to artificial intelligence, while other approaches include symbolic artificial intelligence.',
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <>
            <p>AI History</p>
          </>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://couseraccess.oss-cn-beijing.aliyuncs.com/images/%E5%9C%862%281%29.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '约翰·麦卡锡' },
          post: { className: 'block-post', children: '达特茅斯学院' },
          time: { className: 'block-time', children: '1956年' },
          title: { className: 'block-title', children: '开幕致辞' },
          content: { className: 'block-content', children: '人工智能的诞生\n' +
                '在由达特茅斯学院举办的一次会议上，计算机专家约翰·麦卡锡提出了“人工智能”一词。后来，这被人们看做是人工智能正式诞生的标志。后来他与另一位名叫马文·明斯基(后被人称为“人工智能之父”) 共同创建了世界上第一座人工智能实验室——MIT AI LAB实验室，在那之后不久，最早的一批人工智能学者和技术开始涌现。\n' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://couseraccess.oss-cn-beijing.aliyuncs.com/images/%E5%9C%861.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '罗森布拉特' },
          post: { className: 'block-post', children: '神经网路前辈' },
          time: { className: 'block-time', children: '1957年' },
          title: { className: 'block-title', children: '人工智能的第一次发展' },
          content: {
            className: 'block-content',
            children:
              '神经网络Perceptron\n' +
                '罗森布拉特发明神经网络Perceptron。计算机被广泛应用于数学和自然语言领域，用来解决代数、几何和英语问题。这让很多研究学者看到了机器向人工智能发展的信心。甚至在当时，有很多学者认为：“二十年内，机器将能完成人能做到的一切。”\n'
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://couseraccess.oss-cn-beijing.aliyuncs.com/images/%E5%9C%863.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: 'XCON系统' },
          post: { className: 'block-post', children: '卡内基梅隆大学' },
          time: { className: 'block-time', children: '1980年' },
          title: { className: 'block-title', children: '人工智能崛起' },
          content: {
            className: 'block-content',
            children:
              'XCON“专家系统”\n' +
                '卡内基梅隆大学为数字设备公司设计了一套名为XCON的“专家系统”。这是一种，采用人工智能程序的系统，可以简单的理解为“知识库+推理机”的组合，XCON是一套具有完整专业知识和经验的计算机智能系统，为公司节约了4000万美元。\n'
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://couseraccess.oss-cn-beijing.aliyuncs.com/images/%E5%9C%864.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: { className: 'block-name', children: 'IBM公司' },
          post: { className: 'block-post', children: '计算机系统“深蓝”' },
          time: { className: 'block-time', children: '1997年5月11日' },
          title: { className: 'block-title', children: '人工智能的第二次崛起' },
          content: {
            className: 'block-content',
            children:
                '上世纪九十年代中期开始，随着AI技术尤其是神经网络技术的逐步发展，以及人们对AI开始抱有客观理性的认知，人工智能技术开始进入平稳发展时期。IBM的计算机系统“深蓝”战胜了国际象棋世界冠军卡斯帕罗夫，又一次在公众领域引发了现象。2006年，Hinton在神经网络的深度学习领域取得突破，人类又一次看到机器赶超人类的希望,也是标志性的技术进步。 2016年，Deepmind团队的AlphaGO运用深度学习算法战胜围棋冠军。\n'
          },
        },
      },
    ],
  },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '要么忙着生存，要么赶着去死，人总要做点什么。',
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <>
                  <p>陈安然</p>
                </>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: '软工1703-前端攻城狮',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '要温柔，要可爱，要美好。',
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <>
                  <p>肖敏</p>
                </>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: '软工1703-前端攻城狮',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem~k34lgby1rt',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '必须洗净一切往事，否则你永远无法清楚自由地看这个世界。',
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <>
                  <p>牛羽庆</p>
                </>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: '资环18地信01-美工设计师',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem~k34lgf743i9',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '',
              className: 'teams0-content',
            },
            {
              name: 'content',
              children:
                  '单身，待撩。单身，待撩。单身，待撩。单身，待撩。单身，待撩。单身，待撩。',
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <>
                  <p>张佳乐</p>
                </>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: '软工1703-后端攻城狮',
              className: 'teams0-content',
            },
          ],
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://couseraccess.oss-cn-beijing.aliyuncs.com/images/logo2.png',
          href:'/iTeam',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <>
                  <p>iCube.fun for ZeroCup</p>
                  <p>All Rights Reserved</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '跟着大佬学AI' },
        childWrapper: {
          children: [
            { href: '"https://ai.google/education', name: 'link0', children: 'Google AI\n' },
            { href: 'https://aistudio.baidu.com/aistudio/index', name: 'link1', children: 'AI Studio\n' },
            { href: 'https://aischool.microsoft.com/en-us/home', name: 'link2', children: 'AI School - Microsoft\n· ' },
            { href: 'https://github.com/search?q=Ai', name: 'link3', children: 'GitHub\n' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于我们' },
        childWrapper: {
          children: [
            { href: '#', name: 'link1', children: 'Team.iCube.fun' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '开发者' },
        childWrapper: {
          children: [
            { href: 'https://developer.microsoft.com/en-us/windows', name: 'link0', children: 'Windows Dev Center\n' },
            { href: 'https://stackoverflow.com/', name: 'link1', children: 'Stack Overflow\n' },
            { href:'https://developer.microsoft.com/en-us/store/register', name: 'link2',children:'Microsoft developer program\n'},
            { href:'https://visualstudio.microsoft.com/zh-hans/?rr=https%3A%2F%2Faischool.microsoft.com%2Fen-us%2Fhome', name:'link3',children: 'Microsoft Visual Studio\n'},
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2019 by <a href="/iTeam">iCube.fun</a> All Rights Reserved
        </span>
      </>
    ),
  },
};
