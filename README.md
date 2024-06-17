---
home: true
modules:
  - BannerBrand
  - Features
  # - Blog
  # - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  
  #title: vuepress-reco
  #description:  一款简洁的 vuepress 博客 & 文档 主题。
  #tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  title:  ' 1'
  description: ' 1'  
  tagline:  ' 1'
  buttons:
    - { text: 巅峰之路→, link: '/posts.html' }
    #- { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }
  socialLinks:
    #- { icon: 'LogoGithub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
blog:
  socialLinks:
   # - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
isShowTitleInHome: false
actionText: 关于
actionLink: /views/other/about

features:  
  - title: Yesterday  
    details: |  
      昨日的余晖，
      在记忆的角落静静摇曳，
      像是未完的歌，
      轻唱着那些逝去的美好。

      古道上，谁的琵琶声又起，
      悠悠扬扬，似水流年。
      桃花已落，春水东流，
      只留下一地零散的时光碎片。 
  - title: Today  
    details: |  
      今朝，阳光斑驳，
      洒满我窗前的每一寸土地。
      清风徐来，轻抚心弦，
      弹奏出一曲温柔的乐章。

      笔下的字句，如墨香四溢，
      在纸页上舞动，翩翩起舞。
      岁月静好，此刻便是仙境，
      让我沉醉，忘却世间的纷扰。
  - title: Tomorrow  
    details: |  
      明日的朝霞，还未升起，
      但我已迫不及待，期待它的到来。
      未知的旅途，在前方等待，
      我将怀揣憧憬，勇敢前行。

      星辰大海，无垠无际，
      任我翱翔，追寻心中的梦想。
      明日，将是新的开始，
      我将拥抱它，迎接每一个可能的奇迹。

footer:
  #record: 'ICP 备案文案'
  #recordLink: 'ICP 备案指向链接'
  cyberSecurityRecord: 粤ICP备2024261876号
  cyberSecurityLink: 'https://beian.miit.gov.cn/'

---
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
h1.title {
  visibility: hidden;
}
.description {
  visibility: hidden;
}
.tagline {
  visibility: hidden;
}
.banner-brand__wrapper .banner-brand__content .btn-group .xicon-container {
  margin-bottom: -13rem;
  margin-left: 2rem;
  height: 2.5rem;
  cursor: pointer;
  border-radius: .5rem;
  background-color: #3eaf7c;
  padding-left: 1rem;
  padding-right: 1rem;
  vertical-align: middle;
  font-weight: 600;
  line-height: 8;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  transition: color 0.3s ease; 
}
.xicon-content:hover {
  color: #ff0000; /* 鼠标悬停时的颜色 */
}

/* 媒体查询：调整按钮在不同屏幕尺寸上的样式 */
@media (max-width: 768px) {
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container {
    margin-bottom: -28rem; /* 调整 margin-bottom 以适应移动端 */
    margin-left: 1rem;    /* 调整 margin-left 以适应移动端 */
    height: 2rem;         /* 调整高度以适应移动端 */
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 14px;      /* 调整字体大小以适应移动端 */
  }
}

@media (max-width: 480px) {
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container {
    margin-bottom: 3rem; /* 调整 margin-bottom 以适应小屏幕 */
    margin-left: 0.5rem;   /* 调整 margin-left 以适应小屏幕 */
    height: 1.5rem;        /* 调整高度以适应小屏幕 */
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    font-size: 12px;       /* 调整字体大小以适应小屏幕 */
  }
}
</style>