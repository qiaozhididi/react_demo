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

`key`帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key

当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key （index作为key的话，如果下标发生变化，其余数据也会重新渲染）

key 详细介绍：https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

在React中效率高的原因：

- 1.DOM的操作上速度非常快.(React设计是存在一个虚拟DOM)

## React 事件处理

- React事件的命名采用小驼峰命名(camelCase)，而不是纯小写。
- 使用JSX语法的时候需要传入一个函数作为事件处理函数，而不是一个字符串。

### 事件对象
默认情况下，react会传递一个事件对象到事件的处理函数，这个事件对象是一个合成事件对象。

### 事件处理程序传递参数

一、事件绑定的基本概念
事件绑定，简而言之，就是将用户的操作（如点击、输入等）与代码中的特定函数关联起来。在React中，这一过程通过在JSX中指定事件处理函数来实现。

二、基本事件绑定
在React中，事件处理函数的命名遵循驼峰命名法（camelCase），并通过JSX语法绑定到对应的元素上。例如：
```js
class ClickButton extends React.Component {
  handleClick() {
    console.log('按钮被点击了');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        点击我
      </button>
    );
  }
}
```
在上面的示例中，onClick事件被绑定到handleClick方法，当按钮被点击时，handleClick方法将被执行。

三、绑定this上下文
在类组件中，事件处理函数中的this默认不绑定到组件实例上，可能会导致this为undefined。解决这个问题有两种常见方法：

在构造函数中绑定this：
```js
class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('按钮被点击了');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        点击我
      </button>
    );
  }
}
```
使用箭头函数定义方法：
```js
class ClickButton extends React.Component {
  handleClick = () => {
    console.log('按钮被点击了');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        点击我
      </button>
    );
  }
}
```
四、传递参数
在事件处理函数中，有时需要传递额外的参数。React提供了多种方式来实现这一点：

使用箭头函数：
```js
class GreetingButton extends React.Component {
  handleClick(name) {
    console.log(`Hello, ${name}!`);
  }

  render() {
    return (
      <button onClick={() => this.handleClick('Jack')}>
        点击我
      </button>
    );
  }
}
```
```js
结合事件对象和自定义参数：
class GreetingButton extends React.Component {
  handleClick(e, name) {
    console.log(e);
    console.log(`Hello, ${name}!`);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e, 'Jack')}>
        点击我
      </button>
    );
  }
}
```
五、事件对象
在事件处理函数中，事件对象e提供了丰富的信息，如事件类型、目标元素等。例如：
```js
class InputComponent extends React.Component {
  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange} />
    );
  }
}
```
六、事件委托
React中的事件绑定实际上是利用了事件委托的机制。所有的事件监听器都会被绑定到根节点上，然后根据事件的目标元素进行分发。这种方式提高了事件处理的效率。

七、常见事件处理
React支持多种常见的事件类型，如onClick、onChange、onSubmit等。以下是一些常见的事件处理示例：

处理表单提交：
```js
class FormComponent extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('表单提交了');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">提交</button>
      </form>
    );
  }
}
```
处理输入框变化：
```js
class InputComponent extends React.Component {
  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange} />
    );
  }
}
```
八、优化事件处理
为了提高应用的性能，可以采取以下优化措施：

避免在渲染方法中使用匿名函数：
匿名函数会在每次渲染时创建一个新的函数实例，这可能会导致不必要的重渲染。尽量在组件的构造函数或类属性中定义事件处理函数。

使用事件委托：
利用React的事件委托机制，尽量减少事件监听器的数量。

防抖和节流：
对于高频触发的事件（如onScroll、onResize），可以使用防抖（debounce）或节流（throttle）技术来减少事件处理函数的调用频率。

## 函数组件与class组件

- 函数组件

可以使用首字母为大写的名称定义一个函数，并且让这个函数返回一个React元素，这类组件被称为“函数组件”
```js
function Home(){
  return <h1>Hello World!</h1>

}
```

- 类组件

可以使用ES6 的class来定义组件，通过render函数来返回react元素。
```js
class Home extends React.Component{
  render(){
    return <h1>Hello World!</h1>
  }
}
```

- 渲染组件

使用组件，直接像使用普通标签那样使用就可以了。

## 组件的关系

组件化开发:
- 可复用性强
- 后期维护性高

## 组件的Props

组件与组件之间是可以交互的，可以互相传递数据的。

我们可以通过props属性让父组件向子组件传递数据。

提示:
- 组件可以接受任意 props，包括基本数据类型，React 元素以及函数。
- 组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props，props具有只读性。

## 子传父
子组件向都组件传递数据，依然可以利用props实现。

props 对于数据类型没有限制，那么可以利用props传递函数，然后在子组件中调用传递进来的函数，并且在调用的时候传递数据。

## 组件组合
组件当中也可以嵌套其他元素或者组件。