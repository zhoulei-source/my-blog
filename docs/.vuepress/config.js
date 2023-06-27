module.exports = {
  title: "个人博客",
  description: "记录分享学习笔记",
  theme: "reco",
  base: "/my-blog/",
  plugins: ['@vuepress/last-updated'],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    lastUpdated: '上次更新',
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
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children:[]
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
  },
};
