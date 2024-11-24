import React from "react";

function EventParamsDemo1() {
  //不仅获取参数，还要获取Event对象
  const clickHandler = (params) => {
    return (e) => {
      alert(params);
      console.log(e);
    };
  };
  return (
    <div>
      <h3>事件处理传递参数1</h3>
      <button onClick={clickHandler("hello")}>传递参数</button>
    </div>
  );
}

export default EventParamsDemo1;
