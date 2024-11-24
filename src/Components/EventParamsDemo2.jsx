import React from "react";

function EventParamsDemo2() {
  const clickHandler = (data,e) => {
    alert(data);
    console.log(e);
  };
  return (
    <div>
      <h3>事件处理传递参数2</h3>
      <button
        onClick={(e) => {
          clickHandler("参数2",e);
        }}
      >
        传递参数2
      </button>
    </div>
  );
}

export default EventParamsDemo2;
