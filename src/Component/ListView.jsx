import React from "react";

function ListView() {
    const names= ['qz','didi','qzfrato']
  return (
    <div className="List">
      <h3>列表渲染</h3>
      <ul>
        {names.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListView;
