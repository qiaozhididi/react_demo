import React from "react";

function EventObjDemo() {
  const clickHandler = (e) => {
    console.log(e);
  };
  const clickAHandler = (e) => {
    e.preventDefault(); //阻止默认事件
    e.stopPropagation(); //阻止事件冒泡
    console.log("点击了a标签");
  };
  const clickDivHandler = (e) => {
    console.log("点击了DIV");
  };

  return (
    <div>
      <h3>事件对象</h3>
      <button onClick={clickHandler}>事件对象</button>
      <div onClick={clickDivHandler}>
        <a onClick={clickAHandler} href="https://www.baidu.com">
          百度一下
        </a>
      </div>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default EventObjDemo;
