import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite';
import friendshipLinksData from './public/js/friendshipLinks';
//import { backPlugin } from 'vuepress-plugin-background';
//import { bgmPlayer } from 'vuepress-plugin-bgm-player2x';
//import { live2dPlugin } from 'vuepress-plugin-live2d-plus'
//import { nextSearchPlugin } from 'vuepress-plugin-next-search'

export default defineUserConfig({
  title: "墨海思微澜",
  description: "没有纷扰的社交，没有喧嚣的噪音，沉浸代码和文字的世界中，只有我与我的思绪在代码与文字的海洋里遨游，不断学习进步，用文字记录着技术成长的点滴与生活的美好。",
  //port: 9999,   //运行端口号
  bundler: viteBundler(),
  // 添加到html的head顶部的东西
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '个人博客网页' }],  
    ['meta', { name: 'description', content: '个人博客网页' }],  
    //['meta', { name: 'author', content: 'Mr.Lin' }], 
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
  
  plugins: [
    /*
    bgmPlayer({rootComponent:true,audios: [
      //网易云id实例
      {
        audioID: '574919767',
        autoplay: true,
        autoShrink: true,
        shrinkMode: 'mini',

      }]}
    ),
    
    backPlugin({
      type: 'normalLine',
      options:{
        //背景颜色
        backColor: '',
        color: '#00FFFF'
      }
    }),
    */
   /*
    nextSearchPlugin({
      fullText: true,
      placeholder: '搜索',
      frontmatter: {
        tag: '标签',
        category: '分类',
      }
    }),*/
    /*
    live2dPlugin({
      enable: true,
      model: {
        url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/haru01/haru01.model.json'
      },
      display: {
        position: 'right',
        width: '189px',
        height: '420px',
        xOffset: '50px',
        yOffset: '-80px'
      },
      mobile: {
        show: true
      },
      react: {
        opacity: 0.8
      }
    })*/
  ],
  
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // bundler: webpackBundler(),
  theme: recoTheme({
    primaryColor: '#3aa675',
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    catalogTitle: "☆本文目录☆",
    //author: "Mr.Lin",
    authorAvatar: "/head.png",
    pages: [
      {
        path: '/aaa.html',
        layout: 'FriendshipLink',
      },
    ],
    algolia: {
      appId: 'JC1CPC3I1H',
      apiKey: '0dc03a4ea560ba84a6098fb6bacbf06f',
      indexName: 'ideasphere',
      inputSelector: '.search-box',
      algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
      debug: false // Set debug to true if you want to inspect the dropdown
    },
    friendshipLinks: friendshipLinksData.friendshipLinks,
    //navbar: false,
    //docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    //docsBranch: "main",
    //docsDir: "/blogs",
    //repoLabel: "仓库",
    lastUpdatedText: "最近一次更新",
    lastUpdated: "lastUpdated",
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    editLinkText: "编辑此页",
    editLink: true,
    // series 为原 sidebar
    series: {
      "/docs/Python/": [
        {
          text: "Python语言",
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
      {  
        text: "文档", icon: "Document",
        children: [
          { text: "Python", link: "/docs/Python/1.html", icon: "LogoPython" },
          { text: "Java面试", link: "/docs/Python/1.html", icon: "Book" },
          { text: "问题集锦", link: "/docs/Python/1.html", icon: "RequestQuote" }
        ]
      },
      { text: "时间线", link: "/timeline", icon: "TextLineSpacing" },
      { text: "文件", link: "/blogs/doc.html", icon: "Doc" },
      { text: "工具宝库", link: "/friendship-link.html", icon: "LocationSave" },
      { text: "关于本站", link: "/about", icon: "ChartRing" },
      { text: "联系站长", link: "/blogs/contact.html", icon: "LogoWechat", target: "_self"}
    ],
    
  }),
  
  debug: true,
});
