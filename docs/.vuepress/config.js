const path = require('path')
module.exports = {
  base: '/ukulele/',
  title: 'ukulele UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/'},
      { text: '交流', link: 'https://github.com/Yuriuh'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
        ]
      }
    ]
  },
  scss: {
    includePaths: [path.join(__dirname, '../../styles')]
  }
}