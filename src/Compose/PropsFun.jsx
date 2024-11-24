import React from "react";

function PropsFun(props) {
  return (
    <div>
      <h3>函数组件-props</h3>
      <div>
        <p>接收的数据:{props.title}</p>
        <p>年龄:{props.age}</p>
        <ul>
          {props.arr.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <p>名字:{props.user.name}</p>
      </div>
    </div>
  );
}

export default PropsFun;
