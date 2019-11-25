import React from 'react';
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
            <p>AI高校研究</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>AI人才发源地，全球顶尖高校AI实验室盘点</p>
          </>
        ),
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
        href:'https://bair.berkeley.edu/',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://03.imgmini.eastday.com/mobile/20180730/20180730211834_e1748c77d4660806d07e375135c47f44_2.jpeg',
            href:'https://bair.berkeley.edu/',
          },
          content: {
            children: '伯克利人工智能研究室（BAIR）' ,
            href:'https://bair.berkeley.edu/',
          },
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
              'https://03.imgmini.eastday.com/mobile/20180730/20180730211834_e1748c77d4660806d07e375135c47f44_4.jpeg',
          },
          content: { children: 'MIT计算机科学与人工智能实验室' ,href: "http://www.csail.mit.edu/"},
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
              'https://03.imgmini.eastday.com/mobile/20180730/20180730211834_e1748c77d4660806d07e375135c47f44_6.png',
            href:'https://ai.stanford.edu/',
          },
          content: { children: '斯坦福大学人工智能实验室（SAIL）' ,href:'https://ai.stanford.edu/'},
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
              'https://03.imgmini.eastday.com/mobile/20180730/20180730211834_e1748c77d4660806d07e375135c47f44_8.png',
            href:'http://education.rec.ri.cmu.edu/',
          },
          content: { children: '卡内基梅隆大学机器人学院（CMRA）' ,href:'http://education.rec.ri.cmu.edu/'},
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
              'https://03.imgmini.eastday.com/mobile/20180730/20180730211834_e1748c77d4660806d07e375135c47f44_9.png',
            href:'https://mila.quebec/',
          },
          content: { children: '蒙特利尔大学机器学习研究所（MILA）',href:'https://mila.quebec/' },
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
              'https://03.imgmini.eastday.com/mobile/20180730/20180730211834_e1748c77d4660806d07e375135c47f44_11.jpeg',
            href:
            'http://www.lcfi.ac.uk/',
          },
          content: { children: '剑桥大学未来智能研究中心' , href:'http://www.lcfi.ac.uk/'},
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
              'https://03.imgmini.eastday.com/mobile/20180730/20180730211834_e1748c77d4660806d07e375135c47f44_12.jpeg',
            href:
            'https://www.ethz.ch/de.html',
          },
          content: { children: '苏黎世联邦理工学院',href:'https://www.ethz.ch/de.html' },
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
              'https://03.imgmini.eastday.com/mobile/20180730/20180730211834_e1748c77d4660806d07e375135c47f44_13.jpeg',
          },
          content: { children: '布里斯托大学智能系统实验室' },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>全球顶尖AI研究院背后的大佬</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://5b0988e595225.cdn.sohucs.com/images/20171026/3b529aa8495346c9a263c27c75298ed4.jpeg',
            },
            { name: 'title', className: 'teams1-title', children: 'Yoky Matsuoka' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Google X实验室',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Google X实验室的创始人Yoky Matsuoka可谓科技界的传奇女子，她毕业于加州大学伯克利分校，之后在MIT获得电气工程博士学位，2009年加入谷歌并创立了Google X实验室。由于她在神经科学及机器人技术领域作出的贡献，她获得麦克阿瑟基金会等组织颁发的多个奖项，是科技界为数不多的女性牛人大咖之一。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://5b0988e595225.cdn.sohucs.com/images/20171026/a202a07e969e4f6a9d82c178a5836183.jpeg',
            },
            { name: 'title', className: 'teams1-title', children: 'Demis Hassabis' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'DeepMind实验室',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'DeepMind实验室目前的负责人戴密斯·哈萨比斯（Demis Hassabis）是国际象棋神童，在13岁时以2300的等级分（在当时世界上14岁以下的人中排名第二，第一名的等级分为2335）而达到了大师的水平。他在其他游戏方面同样技艺高超，包括扑克。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://5b0988e595225.cdn.sohucs.com/images/20171026/5f1aaf2f687a4f49bc1577598879755a.jpeg',
            },
            { name: 'title', className: 'teams1-title', children: '沈向阳Shum' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '微软研究院',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '微软研究院的负责人沈向阳（Harry Shum）是计算机视觉和图形学研究的世界级专家，主管微软技术与研发部门，主要负责推动公司中长期总体技术战略、策略以及前瞻性研究与开发工作。他还是美国电气电子工程协会院士、国际计算机协会院士、曾任微软亚洲研究院院长兼首席科学家。',
            },
          ],
        },
      },
      {
        name: 'block~k3bfd5bdpsc',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://5b0988e595225.cdn.sohucs.com/images/20171026/4455d37ea50c41e290a8988168d168dc.jpeg',
            },
            { name: 'title', className: 'teams1-title', children: 'Yann LeCun' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'Facebook人工智能实验室',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'Facebook人工智能实验室的负责人Yann LeCun是人工智能界的一个传奇。他在贝尔实验室工作了超过20年，然后在AT&T实验室担任部门主管到2003年。现代的卷积神经网络是 LeCun职业生涯的巅峰之作。ATM机识别钞票就得益于LeCun负责的「SN」的神经网路模拟器的早期研究。',
            },
          ],
        },
      },
      {
        name: 'block~k3bfd6ykxk',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://5b0988e595225.cdn.sohucs.com/images/20171026/1b4454a0d26542f1b4b1d49fa98fd1e8.jpeg',
            },
            { name: 'title', className: 'teams1-title', children: '王海峰' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '百度研究院院长',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '百度研究院院长是原百度副总裁、AIG总负责人王海峰。王海峰是自然语言处理领域的知名科学家，国际学术组织ACL 50多年历史上唯一出任主席（President）的华人，同时也是唯一来自中国大陆的ACL Fellow。',
            },
          ],
        },
      },
      {
        name: 'block~k3bfd8kp45o',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://5b0988e595225.cdn.sohucs.com/images/20171026/10f89e940e2b4018b67bd910b33030c4.jpeg',
            },
            { name: 'title', className: 'teams1-title', children: 'Gill Pratt' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '丰田实验室',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '丰田实验室的现任CEO为Gill Pratt，他曾担任美国国防部高等研究计划署DARPA的项目主管。GillPratt是在机器人领域备受尊敬的领军人物。在加入丰田实验室之前，他任职于美国国防部的重要研究机构DARPA，并组织了广受关注的人形搜救机器人挑战赛。',
            },
          ],
        },
      },
    ],
  },
};
