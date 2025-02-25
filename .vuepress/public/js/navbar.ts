export default {
	navbar: [
      { text: "首页", link: "/", icon: "Home" },
      {  
        text: "博客", icon: "Blog",
        children: [
          { text: "分类", link: "/categories/Python/1.html", icon: "CollapseCategories" },
          { text: "标签", link: "/tags/Pythonyuyan/1.html", icon: "TagGroup" }
        ]
      },
      {  
        text: "文档", icon: "Document",
        children: [
          { text: "Python", link: "/docs/Python/1.html", icon: "LogoPython" },
          { text: "NIO专题", link: "/docs/java/19.html", icon: "ChartRelationship" },
          { text: "html", link: "/docs/html/27.html", icon: "ChartRelationship" },
          { text: "Oracle数据库", link: "/docs/Python/1.html", icon: "DataBase" },
          { text: "MySQL数据库", link: "/docs/Python/1.html", icon: "DatabaseDatastax" },
          { text: "Java面试", link: "/docs/Python/1.html", icon: "Book" },
          { text: "问题集锦", link: "/docs/Python/1.html", icon: "RequestQuote" }
        ]
      },
      { text: "文件", link: "/blogs/doc.html", icon: "Doc" },
      { text: "时间线", link: "/timeline.html", icon: "TextLineSpacing" },
      
      { text: "工具库", link: "/tools.html", icon: "Webhook" },
      { text: "项目推荐", link: "#", icon: "Webhook" },
      { text: "关于本站", link: "/about.html", icon: "ChartRing" },
      { text: "联系站长", link: "/blogs/contact.html", icon: "LogoWechat", target: "_self"}
    ]
}