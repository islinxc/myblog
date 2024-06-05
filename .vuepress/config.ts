import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "墨海思微澜",
  description: "没有纷扰的社交，没有喧嚣的噪音，沉浸代码和文字的世界中，只有我与我的思绪在代码与文字的海洋里遨游，不断学习进步，用文字记录着技术成长的点滴与生活的美好。",
  port: 9999,   //运行端口号
  bundler: viteBundler(),
  // 添加到html的head顶部的东西
  head: [
    ['link', { rel: 'icon', href: '/超人虎IP.ico' }],
    ['meta', { name: 'keywords', content: '个人博客网页' }],  
    ['meta', { name: 'description', content: '个人博客网页' }],  
    ['meta', { name: 'author', content: 'Mr.Lin' }],  
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }] 
  ],
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // bundler: webpackBundler(),
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/超人虎IP.png",
    catalogTitle: "☆目录☆大纲☆",
    author: "Mr.Lin",
    authorAvatar: "/head.png",
    //docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    //docsBranch: "main",
    //docsDir: "/blogs",
    //repoLabel: "仓库",
    lastUpdatedText: "最近一次更新",
    lastUpdated: "lastUpdated",
    externalLinkIcon: false,
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    editLinkText: "编辑此页",
    // series 为原 sidebar
    series: {
      "/docs/": [
        {
          text: "python",
          children: ["1", "2", "3", "4", "5"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/", icon: "Home" },
      {  
        text: "博客", icon: "Blog",
        children: [
          { text: "分类", link: "/categories/Python/1", icon: "CollapseCategories" },
          { text: "标签", link: "/tags/Pythonyuyan/1", icon: "TagGroup" }
        ]
      },
      { text: "文档", link: "/docs/1.html", icon: "Document" },
      { text: "时间线", link: "/timeline", icon: "TextLineSpacing" },
      { text: "常用网站", link: "https://dh.xiaokang.me/", icon: "LocationSave" },
      { text: "关于本站", link: "/about", icon: "ChartRing" },
      { text: "其他网站", link: "https://open.163.com/", icon: "", target: "_self"}
    ],
    plugins: [
      ['ribbon'],
    ],
    /*
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },*/
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  
  // debug: true,
});
