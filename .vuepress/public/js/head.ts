export default {
    head: [
        ['link', { rel: 'icon', href: '../imgs/favicon.ico' }],
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
    ]
}