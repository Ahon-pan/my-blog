
const CONFIG = require("./util")
// module.exports = {
//   title: 'my-blog',  // 设置网站标题
//   dest: './dist',    // 设置输出目录
//   base: '/mt-blog/', // 设置站点根路径
//   repo: 'https://github.com/ahon-pan/mt-blog' // 添加 github 链接
// }
const pluginConf = require('../../config/pluginConf.js');
const { defaultTheme } = require('@vuepress/theme-default')
// const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
// import { commentPlugin } from "vuepress-plugin-comment";

module.exports = {
  lang: 'zh-CN',
  title: 'William',// 设置网站标题
  description: 'William的博客',
  base: '/my-blog/',// 设置站点根路径
  dest: 'docs/.vuepress/dist',  // 设置输出目录
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 增加一个自定义的 favicon
    // 添加谷歌统计
    // [
    //   "script",
    //   {
    //     src: "https://www.googletagmanager.com/gtag/js?id=UA-234653905-1",
    //     async: true
    //   }
    // ],
    // [
    //   "script",
    //   {},
    //   `
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //     gtag('config', 'UA-234653905-1');
    //   `
    // ],
  ],
  plugins: pluginConf,
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
