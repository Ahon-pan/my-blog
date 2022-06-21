
const CONFIG = require("./util")
// module.exports = {
//   title: 'my-blog',  // 设置网站标题
//   dest: './dist',    // 设置输出目录
//   base: '/mt-blog/', // 设置站点根路径
//   repo: 'https://github.com/ahon-pan/mt-blog' // 添加 github 链接
// }
// const pluginConf = require('../../config/pluginConf.js');
const { defaultTheme } = require('@vuepress/theme-default')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { searchPlugin } = require('@vuepress/plugin-search')
module.exports = {
  title: 'William',// 设置网站标题
  description: 'William的博客',
  base: '/',// 设置站点根路径
  dest: 'docs/.vuepress/dist',  // 设置输出目录
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 增加一个自定义的 favicon
  ],
  plugins: [
    backToTopPlugin(), // 返回顶部
    searchPlugin({
      locales: {
        // '/': {
        //   placeholder: 'Search',
        // },
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    // docsearchPlugin({
    //   // 配置项
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //   locales: {
    //     '/': {
    //       placeholder: 'Search Documentation',
    //       translations: {
    //         button: {
    //           buttonText: 'Search Documentation',
    //         },
    //       },
    //     },
    //     '/zh/': {
    //       placeholder: '搜索文档',
    //       translations: {
    //         button: {
    //           buttonText: '搜索文档',
    //         },
    //       },
    //     },
    //   },
    // }),
  ],
  // plugins: pluginConf,
  theme: defaultTheme({
    // search: true,
    logo: '/avater.png',
    // 添加导航栏
    navbar: CONFIG.navbar,
    sidebar: CONFIG.sidebar,
    // sidebarDepth: 0,
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者'
  }),
}
