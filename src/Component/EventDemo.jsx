import React from "react";

function EventDemo() {
  const clickHandler = () => {
    alert("点击了");
  };
  const onInputChange = () => {
    console.log("正在输入");
  };

  return (
    <div>
      <button onClick={clickHandler}>点击事件</button>
      <input
        type="text"
        onChange={onInputChange}
        onFocus={() => console.log("获得焦点")}
        onBlur={() => console.log("失去焦点")}
      />
    </div>
  );
}

export default EventDemo;
