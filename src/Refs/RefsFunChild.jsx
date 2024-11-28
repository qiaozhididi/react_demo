import React from "react";

// export default function RefsFunChild() {
//   return (
//     <div>RefsFunChild</div>
//   )
// }

export default React.forwardRef((props, ref) => (
  <div>
    <h3 ref={ref}>RefsFunChild函数子组件</h3>
  </div>
));
