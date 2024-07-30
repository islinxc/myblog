import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite';
import friendshipLinksData from './public/js/friendshipLinks';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import navbarData from './public/js/navbar';
import pluginsData from './public/js/plugins';
import headData from './public/js/head';

export default defineUserConfig({
  title: "墨海思微澜",
  description: "没有纷扰的社交，没有喧嚣的噪音，沉浸代码和文字的世界中，只有我与我的思绪在代码与文字的海洋里遨游，不断学习进步，用文字记录着技术成长的点滴与生活的美好。",
  //port: 9999,   //运行端口号
  bundler: viteBundler(),
  // 添加到html的head顶部的东西
  head: headData.head,
  
  plugins: pluginsData.plugins,
  
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // bundler: webpackBundler(),
  theme: recoTheme({
    primaryColor: "#3aa675",
    style: "@vuepress-reco/style-default",
    logo: "/imgs/logo.png",
    catalogTitle: "☆本文目录☆",
    //author: "Mr.Lin",
    authorAvatar: "/imgs/head.png",
    pages: [
      {
        path: '/tools.html',
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
    lastUpdated: true,
    subSidebar: true, //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    editLinkText: "编辑此页",
    editLink: true,
    // series 为原 sidebar
    series: {
      "/docs/": [
        {
          text: "Python语言",
          children: ["Python/1", "Python/2", "Python/3", "Python/4", "Python/5", "Python/12", "Python/13", "Python/14", "Python/15", "Python/16", "Python/17", "Python/18"],
        },
        {
          text: "NIO专题",
          children: ["java/19", "java/20"],
        },
      ],
      
    },
    navbar: navbarData.navbar,
    
  }),
  
  debug: true,
});