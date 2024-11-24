# react 基础学习笔记

#### 版本环境

- npm/npx： 10.2.4
- Node：v18.19.1

#### 创建项目
```
npx create-react-app react-demo

克隆项目：
git clone https://github.com/qiaozhididi/react_demo.git
```

#### 运行项目

```
// 进入项目目录
cd ./react-demo
// 如果是克隆的需要先安装依赖
npm install
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

#### 组件
在 React 应用中，我们把一个页面看作是由一个个组件构成的。每一个组件可以包含自己的页面结构（HTML）与页面逻辑（JS）

#### 组件化
组件化开发，带来了全新的开发体验和编码方式。在React 中，构建管理自身状态的封装组件，然后对其组合以构建复杂的用户UI界面

由于组件逻辑使用 JavaScript 编写而非模板，因此可以在应用中传递数据，并保持与 DOM 分离。

#### 什么是 JSX
JavaScript 的语法扩展，JSX 可以生成 React "元素"，React 元素用来描述页面的结构，可以把 JSX 语法理解为 `JavaScript 和 XML 的混合体`。

`{ }`执行js 语法。

#### 为什么要使用 JSX？

React 认为渲染逻辑本质上与其他UI逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

React 并没有采用将**标记与逻辑分离到不同文件**这种人为的分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现**关注点分离**。

#### JSX的Class 和Style 属性

在jsx中，`class`是关键字，定义标签的`class`需要使用`className`；(注意：使用小驼峰命名法)

内联设置元素的Style：使用`{{}}`定义属性（优先级高，不建议使用）。或者单独编写CSS文件，在jsx中使用Import 引入。

React 关注点分离：HTML + JavaScript 合并到一起，CSS还是单独编写。

Vue关注点分离：HTML + JavaScript + CSS 合并一起。

#### JSX 生成React元素

```js
const element = React.createElement(
    'h1',
     {className: 'con'},
    'hello,Qzfrato'
   );
```
```js
//简化版
const elementEasy = {
type: 'h1',
props: {
    className: 'con',
    children: 'hello,qiaozhididi'
    }
};
```

### 条件渲染

使用if
```js
const flag=true
if(flag){
  return <div>True</div>
}else{
  return <div>False</div>
}
```
使用三目运算符
```js
const flag = true
return flag ? <div>True</div> : <div>False</div>
或
const flag = true
const element=flag ? <div>True</div> : <div>False</div>
return element
```

与运算符&&
```js
const flag=true
return flag && <div>生存吧</div>

const flag=true
return(
    <div>
       {flag && "生存吧"}
    </div>
)
```

提示：

在 `JavaScript` 中，`true && expression` 总是会返回 `expression`, 而 `false && expression` 总是会返回 `false`。
因此，如果条件是 `true`，`&&` 右侧的元素就会被渲染，如果是 `false`，React 会忽略并跳过它(不渲染)。

使用null
```js
const flag=true
return flag ?<div>生存吧</div> : null
```

### 列表渲染

使用map可以渲染数组

注意：key定义