---
title: 网站优化之数据统计
author: 周磊
date: "2023-06-27"
---

# 网站优化之数据统计

## 导语

数据统计在网站优化中扮演着至关重要的角色。通过收集、分析和解读数据，前端开发人员可以深入了解用户行为、性能指标和关键业务指标，从而指导优化工作。本篇博客将探讨网站优化中的数据统计方法和技术，帮助前端开发人员更好地理解和应用数据统计来提升网站性能和用户体验。

## 为什么进行数据统计

数据统计是网站优化的关键一环。通过数据统计，前端开发人员可以了解网站的访问情况、用户行为、页面加载速度等关键指标，从而找出问题和改进空间。数据统计可以帮助我们回答以下问题：

1. 用户行为：用户是如何与网站进行交互的？他们在网站上停留的时间长短、访问哪些页面、点击了哪些元素等等。
2. 页面性能：网站的加载速度如何？是否存在加载缓慢的页面？哪些因素导致了加载速度的下降？
3. 业务指标：关键业务指标是什么？例如转化率、销售额等。通过数据统计，我们可以了解到这些指标的具体数值和变化趋势。

## 常用的数据统计工具和技术

以下是几种常用的数据统计工具和技术，可以用来收集和分析网站数据：

1. Google Analytics：Google Analytics 是一款免费且功能强大的数据统计工具。它可以追踪网站的访问量、用户行为、转化率等，并提供可视化的报表和图表。通过在网站中添加 Google Analytics 的跟踪代码，我们可以方便地收集和分析数据。

2. 前端性能监控工具：如 WebPageTest、Lighthouse 等工具可以帮助我们评估网站的性能表现，并提供详细的性能指标和建议。通过监控关键性能指标，我们可以发现潜在的性能问题并进行优化。

3. 自定义数据统计：除了使用通用的数据统计工具外，我们还可以通过自定义代码来统计特定的数据。例如，通过 JavaScript 代码监听用户的行为事件，如点击、滚动等，然后将这些数据发送到后台进行分析。

## 数据统计的应用场景和优化方向

数据统计可以应用于各个方面的网站优化，以下是一些常见的应用场景和优化方向：

1. 用户体验优化：通过数据统计，我们可以了解用户在网站上的行为习惯和偏好，从而优化页面布局、导航设计、内容呈现等，提升用户体验。

2. 页面性能优化：数据统计可以帮助我们发现网站中加载缓慢的页面，识别导致性能问题的因素，并采取相应的优化措施，提升页面加载速度和响应性能。

3. 转化率优化：通过数据统计，我们可以了解到用户在关键页面上的行为，分析转化率和转化漏斗，从而找出影响转化的瓶颈，并进行相应的优化，提高转化率。

# 基于百度统计的 UV 和 PV 统计（示例）

在网站优化中，了解网站的访问量和用户行为是至关重要的。百度统计是一款常用的数据统计工具，可以帮助我们追踪网站的访问量、用户行为和其他关键指标。接下来我介绍一下，如何使用百度统计来统计 UV（Unique Visitors）和 PV（Page Views），并解释它们在网站优化中的作用。

## 什么是 UV 和 PV？

- **UV（Unique Visitors）**：独立访客数，指的是一定时间范围内访问网站的唯一用户数量。UV 统计主要用于了解网站的受众规模和覆盖范围。每个用户只计算一次，无论他们访问了多少次或查看了多少页面。

- **PV（Page Views）**：页面浏览量，指的是一定时间范围内网站的页面浏览总次数。PV 统计主要用于衡量网站的流量和用户行为。每次页面访问都会计算为一次 PV，无论是同一用户还是不同用户。

## 使用百度统计统计 UV 和 PV

1. 登陆站点：[百度统计后台](https://tongji.baidu.com/web/welcome/login)

2. 新增网站：在 「管理」- 「网站列表」中，点击「新增网站」
   ![](https://github.com/zhoulei-source/my-blog/blob/master/docs/.vuepress/images/website/stats/1.jpg?raw=true)

3. 填写信息：添加网站域名、网站首页等信息
   ![](https://github.com/zhoulei-source/my-blog/blob/master/docs/.vuepress/images/website/stats/2.jpg?raw=true)

4. 获取代码：在 「管理」- 「网站列表」中，点击「获取代码」，复制代码片段
   ![](https://github.com/zhoulei-source/my-blog/blob/master/docs/.vuepress/images/website/stats/3.jpg?raw=true)

5. 引入代码：在 config.js 里写入生成的代码
   ```
       module.exports = {
           head: [
               [
               'script', {}, `
               var _hmt = _hmt || [];
               (function() {
               var hm = document.createElement("script");
               hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxxxxx";
               var s = document.getElementsByTagName("script")[0];
               s.parentNode.insertBefore(hm, s);
               })();
               </script>
               `
               ]
           ]
       }
   ```
   
6. 本地验证：在浏览器中打开网站，查看是否有数据上报
   ![](https://github.com/zhoulei-source/my-blog/blob/master/docs/.vuepress/images/website/stats/4.jpg?raw=true)
   看到页面请求了 hm.js 和 hm.gif ，表明添加成功。

7. 线上验证
   ![](https://github.com/zhoulei-source/my-blog/blob/master/docs/.vuepress/images/website/stats/5.jpg?raw=true)

8. 等待：如果代码安装正确， 等待一段时间后，即可在百度统计后台看到数据

## 单页应用的数据统计问题

我们通过在 head 中引入百度统计代码，如果是普通的页面，没有什么问题，但我用的 VuePress 搭建的是一个单页应用，在本站点页面切换过程中，不会重新加载页面，自然也不会触发百度统计。所以我们只能统计到用户访问了页面，但具体点开了哪些，跳转了哪些路由并不知道。为了实现路由切换时的数据统计，我们还需要监听路由改变，手动上报数据

这个我们可以查看百度统计的文档，有讲到针对这种单页应用如何在 JS 中调用 PV 跟踪代码：
```
    _hmt.push(['_trackPageview', pageURL]); 
    
    // pageURL：指定要统计PV的页面URL。此项必选。
```

添加路由守卫
```
   export default ({ router }) => {
       router.beforeEach((to, from, next) => {
         if (typeof _hmt !== "undefined") {
           if (to.path) {
             _hmt.push(["_trackPageview", to.fullPath]);
           }
         }
         next();
       });
   };
```

这里我们针对能上报数据的情形梳理一下：
1. 页面进入和刷新
2. 点击其他文章，路由切换
3. 点击文章锚点，切换到其他章节（这里其实还是路由切换）
现在以上都会触发数据上报。

