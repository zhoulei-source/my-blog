module.exports = {
  title: "个人博客",
  description: "记录分享学习笔记",
  theme: "reco",
  base: "/my-blog/",
  plugins: [
    //   显示最后更新时间
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    // 增加百度统计
    [
      "script",
      {},
      `
       var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5372c5fa5d06a8e2ebc558cbc6908bc9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
        </script>        
        `,
    ],
  ],
  themeConfig: {
    subSidebar: "auto",
    lastUpdated: "上次更新",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "周磊的 JavaScript 博客",
        link: "https://github.com/zhoulei-source",
      },
      { text: "Github", link: "https://github.com/zhoulei-source" },
    ],
    sidebar: [
      {
        title: "欢迎",
        path: "/",
        collapsable: false, // 不折叠
      },
      {
        title: "网站搭建与优化",
        path: "/handbook/website/stats",
        collapsable: false, // 不折叠
        children: [
          { title: "网站优化之数据统计", path: "/handbook/website/stats" },
        ],
      },
    ],
  },
};
