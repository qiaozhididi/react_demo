import React from "react";

function IFDemo() {
  const flag = true;
  //   if (flag) {
  //     //如果是单行代码，则不需要添加小括号，如果是多行则需要加括号。
  //     return <div>生存吧</div>;
  //   } else {
  //     return (
  //       <div>
  //         <h2>毁灭吧</h2>
  //       </div>
  //     );
  //   }

  return !flag ? (
    <div>生存吧</div>
  ) : (
    <div>
      <h2>毁灭吧</h2>
    </div>
  );
}

export default IFDemo;
