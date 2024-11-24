import React from "react";

function EventListDemo() {
  const names = ["qz", "didi", "qzfrato"];
  const clickHandler = (data) => {
    alert(data);
  };
  return (
    <div>
      <h3>获取列表数据</h3>
      <ul>
        {names.map((item, index) => {
          return (
            <li
              onClick={() => {
                clickHandler(item);
              }}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EventListDemo;
