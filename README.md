---
home: true
modules:
  - BannerBrandNew
  - Features
  # - Blog
  # - MdContent
  - Footer
bannerBrand:
  bgImage: '/imgs/bg.svg'
  
  #title: vuepress-reco
  #description:  一款简洁的 vuepress 博客 & 文档 主题。
  #tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  buttons:
    - { text: '巅峰之路→', link: '/posts.html' }
blog:
  socialLinks:
   - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
#isShowTitleInHome: false
#actionText: 关于
#actionLink: /views/other/about

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
.banner-brand__wrapper .banner-brand__content .btn-group .xicon-container {
    margin-bottom: -28rem;
    height: 2.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: rgb(58 166 117 / 0.9);
    padding-left: 1rem;
    padding-right: 1rem;
    vertical-align: middle;
    font-weight: 600;
    line-height: 1;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

/* 媒体查询：调整按钮在不同屏幕尺寸上的样式 */
@media (max-width: 1280px) {
  .banner-brand__wrapper .banner-brand__content {
    margin-top: 1rem;
    box-sizing: border-box;
    display: block;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left: 2rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 25px!important;
    margin-top: 1rem;
    height: 2.5rem; 
  }
}

@media (max-width: 1024px) and (max-height: 1366px){
  .banner-brand__wrapper {
    height: 54vh;
  }
  .banner-brand__wrapper .banner-brand__content {
    margin-top: 2rem;
    box-sizing: border-box;
    display: block;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 30px!important; 
    margin-top: 0.5rem;
    height: 2.5rem;    
  }
}

@media (max-width: 1024px) and (max-height: 600px){
  .banner-brand__wrapper {
    height: 100vh;
  }
  .banner-brand__wrapper .banner-brand__content {
    margin-top: -3rem;
    box-sizing: border-box;
    display: block;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 25px!important; 
    margin-top: 0.5rem;
    height: 2.5rem;     
  }
}

@media (max-width: 768px) {
  .banner-brand__wrapper {
    margin-top: -5rem;
  }
  .banner-brand__wrapper .banner-brand__content {
    margin-top: -2rem;
    box-sizing: border-box;
    display: block;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group {
    margin-top: 0rem;
    list-style-type: none;
    padding-left: 0px;
    text-align: left;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 28px!important;      
  }
}

@media (max-width: 540px){
  .banner-brand__wrapper {
    margin-top: -2rem;
  }
  .banner-brand__wrapper .banner-brand__content {
    margin-top: -7rem;
    box-sizing: border-box;
    display: block;
    padding-left: 0.5rem;
    padding-right: 1.5rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group {
    margin-top: 0rem;
    list-style-type: none;
    padding-left: 0px;
    text-align: left;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 16px!important;
    margin-top: 0.5rem;
    height: 1.5rem;    
  }
  .footer-wrapper .cyber-security {
    margin-top: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0rem;
    padding-right: 0rem;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .banner-brand__wrapper {
    margin-top: -4rem;
  }
  .banner-brand__wrapper .banner-brand__content {
    margin-top: 8rem;
    box-sizing: border-box;
    display: block;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 16px!important;    
  }
  .footer-wrapper .cyber-security {
    margin-top: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0rem;
    padding-right: 0rem;
    text-align: left;
  }
}

@media (max-width: 480px) and (max-height: 850px){
  .banner-brand__wrapper {
    margin-top: -4rem;
  }
  .banner-brand__wrapper .banner-brand__content {
    margin-top: -5rem;
    box-sizing: border-box;
    display: block;
    padding-left: 0.5rem;
    padding-right: 1.5rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 16px!important;    
  }
  .footer-wrapper .cyber-security {
    margin-top: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0rem;
    padding-right: 0rem;
    text-align: left;
  }
}

@media (max-width: 480px) and (max-height: 740px){
  .banner-brand__wrapper {
    margin-top: -4rem;
  }
  .banner-brand__wrapper .banner-brand__content {
    margin-top: -7rem;
    box-sizing: border-box;
    display: block;
    padding-left: 0.5rem;
    padding-right: 1.5rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container {
    margin-bottom: -22rem;
    height: 2rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: rgb(58 166 117 / 0.9);
    padding-left: 1rem;
    padding-right: 1rem;
    vertical-align: middle;
    font-weight: 600;
    line-height: 1;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 16px!important;    
  }
  .footer-wrapper .cyber-security {
    margin-top: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0rem;
    padding-right: 0rem;
    text-align: left;
  }
}

@media (max-width: 280px) {
  .banner-brand__wrapper {
    margin-top: -2rem;
  }
  .banner-brand__wrapper .banner-brand__content {
    margin-top: -9rem;
    box-sizing: border-box;
    display: block;
    padding-left: 0.5rem;
    padding-right: 1.5rem;
  }
  .banner-brand__wrapper .banner-brand__content .btn-group .xicon-container .xicon-content {
    font-size: 14px!important;    
  }
  .footer-wrapper .cyber-security {
    margin-top: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0rem;
    padding-right: 0rem;
    text-align: left;
  }
}

</style>


