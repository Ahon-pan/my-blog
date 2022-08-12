const { path } = require('@vuepress/utils')

const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
// const { searchPlugin } = require('@vuepress/plugin-search')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { copyCodePlugin } = require('vuepress-plugin-copy-code2')
// const { socialSharePlugin } = require(`vuepress-plugin-social-share`)
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components')

module.exports = [
  backToTopPlugin(), // 返回顶部
  // searchPlugin({
  //   locales: {
  //     // '/': {
  //     //   placeholder: 'Search',
  //     // },
  //     '/': {
  //       placeholder: '搜索',
  //     },
  //   },
  // }),
  // 谷歌统计方案1
  googleAnalyticsPlugin({
    // 配置项
    id: 'G-MT9EFZ9JMK',
  }),
  // 复制
  copyCodePlugin({
    // 插件选项
    duration: 2000, // 提示消息显示时间，设置为 0 会禁用提示。
    // pure: true, // 是否生成样式纯净的小而简单的复制按钮
  }),
  // vue 组件
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, '../components'),
  }),
  // docSearch  //申请真的慢
  docsearchPlugin({
    // 配置项
    appId: 'WWHXPQWUL8',
    apiKey: 'fa7855339da42ec3eecdc8b9e55a6616',
    indexName: 'ahon-pan',
    locales: {
      '/': {
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
          },
        },
      },
    },
    // container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
    debug: false, // Set debug to true if you want to inspect the modal
  }),
  // 分享
  // socialSharePlugin({
  //   networks: [`email`, `wechat`, `qq`],
  //   email: `sdp_518@126.com`,
  //   autoQuote: true,
  //   // isPlain: true,
  //   qrcodeOptions: {
  //     width: 240,
  //   },
  //   extendsNetworks: {
  //     // wechat: {
  //     //   sharer: `https://ahon-pan.github.io/my-blog/`,
  //     //   type: `popup`, //`qrcode`,
  //     // },
  //     wechat: {
  //       type: `qrcode`,
  //       color: `#1aad19`,
  //       icon: `<svg viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M331.429 263.429q0-23.429-14.286-37.715t-37.714-14.285q-24.572 0-43.429 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.429 14.571q23.428 0 37.714-14t14.286-37.428zM756 553.143q0-16-14.571-28.572T704 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T704 594.857q22.857 0 37.429-12.571T756 553.143zM621.143 263.429q0-23.429-14-37.715t-37.429-14.285q-24.571 0-43.428 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.428 14.571q23.429 0 37.429-14t14-37.428zM984 553.143q0-16-14.857-28.572T932 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T932 594.857q22.286 0 37.143-12.571T984 553.143zM832 326.286Q814.286 324 792 324q-96.571 0-177.714 44T486.57 487.143 440 651.429q0 44.571 13.143 86.857-20 1.714-38.857 1.714-14.857 0-28.572-0.857t-31.428-3.714-25.429-4-31.143-6-28.571-6L124.57 792l41.143-124.571Q0 551.429 0 387.429q0-96.572 55.714-177.715T206.571 82t207.715-46.571q100.571 0 190 37.714T754 177.429t78 148.857z m338.286 320.571q0 66.857-39.143 127.714t-106 110.572l31.428 103.428-113.714-62.285q-85.714 21.143-124.571 21.143-96.572 0-177.715-40.286T512.857 797.714t-46.571-150.857T512.857 496t127.714-109.429 177.715-40.285q92 0 173.143 40.285t130 109.715 48.857 150.571z"></path></svg>`,
  //     },
  //     qq: {
  //       sharer: `https://connect.qq.com/widget/shareqq/index.html?url=@url&title=@title&source=@title&desc=@description&pics=@media&summary="@description"`,
  //       type: `popup`,
  //       color: `#e9201f`,
  //       icon: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M927.742 687.747c-6.87-94.604-70.349-173.86-107.044-214.854 5.094-11.926 17.49-80.957-30.374-128.058.077-1.13.077-2.25.077-3.347 0-185.805-132.253-319.547-298.196-320.155-165.971.61-298.218 134.35-298.218 320.155 0 1.097-.015 2.217.064 3.347-47.864 47.101-35.445 116.132-30.375 128.058-36.67 40.993-100.157 120.25-107.041 214.854-1.24 24.868 2.605 61.095 14.754 77.194 14.802 19.634 55.433-3.94 84.49-66.667 8.084 29.06 26.743 73.421 68.966 129.728-70.66 16.126-90.814 85.817-67.044 123.912 16.765 26.845 55.149 48.924 121.298 48.924 117.69 0 169.667-31.63 192.863-53.657 4.726-4.804 11.547-7.12 20.243-7.139 8.668.018 15.503 2.335 20.215 7.14 23.198 22.025 75.184 53.656 192.848 53.656 66.172 0 104.53-22.08 121.295-48.924 23.778-38.093 3.627-107.787-67.013-123.912 42.222-56.309 60.884-100.669 68.965-129.729 29.064 62.726 69.687 86.3 84.504 66.667 12.136-16.1 15.986-52.326 14.723-77.194"/></svg>`,
  //     },
  //   },
  // }),
]
