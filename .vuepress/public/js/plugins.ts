import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
//import { backPlugin } from 'vuepress-plugin-background';
//import { bgmPlayer } from 'vuepress-plugin-bgm-player2x';
//import { live2dPlugin } from 'vuepress-plugin-live2d-plus'
//import { nextSearchPlugin } from 'vuepress-plugin-next-search'
export default {
	plugins: [
    sitemapPlugin({hostname:"https://www.ideasphere.cn"}),
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
  ]
}