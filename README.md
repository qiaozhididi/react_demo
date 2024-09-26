# react 基础学习笔记

#### 版本环境

- npm/npx： 10.2.4
- Node：v18.19.1

#### 创建项目
```
npx create-react-app react-demo
```

#### 运行项目

```
// 进入项目目录
cd ./react-demo
// 启动项目
npm start
```

#### 项目目录简介
主目录

- node_modules：React项目需要的依赖包，注意：此文件夹不可以移动压缩复制等操作

- public：React项目静态资源文件夹，包含index.html入口文件、图片、manifest.json配置文件等

- src：源码文件夹，我们开发主要在这里编写代码

- .gitignore：git忽略文件

- package-lock.json：完整依赖包的信息文件

- package.json：定义项目所需要的各种模块名称、版本信息等

- README.md：markdown文件，项目的注释或描述文件

`src`目录下主要包含以下文件：
- App.css：App组件对应的css文件

- App.js：App组件，主入口组件

- App.test.js：App组件测试文件

- index.css：index主入口文件对应css文件，也是公共css文件

- index.js：主入口文件

- logo.svg：logo图片

- reportWebVitals.js：检测文件。包含三个关键指标（CLS、FID、LCP）和两个辅助指标（FCP、TTFB）

- setupTests.js：测试文件，针对项目编写测试用例使用

`reportWebVitals`检测文件
**关键指标**

- CLS (Cumulative Layout Shift)：累计布局偏移，得分范围0-1，指的是网页布局在加载期间的偏移量，0表示没有偏移，1表示最大偏移，这个指标指示用户与网站的交互体验，如果网址在加载过程布局一直跳动，用户体验会很差。比如加载一张图片，但没有大小空白占位，导致图片显示时页面高度跳动

- FID(First Input Delay)：首次输入延迟。指的是从用户首次与网页互动（点击链接、按钮等）到浏览器响应此次互动直接的时间。用于判断网页进入互动状态的时间

- LCP (Largest Contentful Paint)：最大内容渲染时间。指的是从用户请求网址到窗口中渲染最大可见内容所需要的时间（最大可见内容通常是图片或者视频，或者大块的文本）

**辅助指标**

- FCP(First Contentful Paint)：首次内容绘制。标记浏览器渲染来自 DOM 第一位内容的时间点，内容可能是文本、图像等元素

- TTFB(Time to First Byte)：首字节到达的时间点