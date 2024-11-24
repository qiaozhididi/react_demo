import "./App.css"; //找相对路径
import Demo from "./Components/Demo";
import MyComponent from "./Components/MyComponent";
import IFDemo from "./Components/IFDemo";
import ListView from "./Components/ListView";
import DataListView from "./Components/DataListView";
import KeyDemo from "./Components/KeyDemo";
import EventDemo from "./Components/EventDemo";
import EventObjDemo from "./Components/EventObjDemo";
import EventParamsDemo1 from "./Components/EventParamsDemo1";
import EventParamsDemo2 from "./Components/EventParamsDemo2";
import EventListDemo from "./Components/EventListDemo";
import FunComponent from "./Components/FunComponent";
import ClassComponent from "./Components/ClassComponent";
import ClassEventDemo from "./Components/ClassEventDemo";
import Parent from "./Compose/Parent";
import PropsFun from "./Compose/PropsFun";
import PropsClass from "./Compose/PropsClass";
import NavComponent from "./Components/NavComponent";

function App() {
  const name = "QzFrato";
  const element = <p>{name}</p>;
  const user = { name: "QzFrato" };
  const image = (
    <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.e6iItqBlqt6l6K261WPMXAHaFj?rs=1&pid=ImgDetMain" />
  );
  const imgUrl =
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.sOzZsfZV9rc7epSGktkNqwHaGL?rs=1&pid=ImgDetMain";
  const image2 = <img src={imgUrl} />;

  //声明导航数据
  const navs1 = ["Python", "前端", "Java", "C#"];
  return (
    <div className="container">
      {/* 基础使用 */}
      {/* <h1>Hello World!{element}</h1> */}
      {/* {image} */}
      {/* {image2} */}
      {/* 样式属性 */}
      {/* <div>
        <h2 style={{ color: "red" }}>标题</h2>
      </div> */}
      {/* <Demo/> */}
      {/* <MyComponent /> */}
      {/* <IFDemo /> */}
      {/* <ListView/>
      <DataListView/> */}
      {/* <KeyDemo/> */}
      {/* 事件处理 */}
      {/* <EventDemo />
      <EventObjDemo />
      <EventParamsDemo1 />
      <EventParamsDemo2 />
      <EventListDemo />
      <FunComponent />
      <ClassComponent />
      <ClassEventDemo /> */}
      {/* 组件关系 */}
      <Parent />
      <PropsFun
        title="传子组件标题"
        age={20}
        arr={["qz", "dd", "qzfrato"]}
        user={user}
      />
      <PropsClass
        title="传子组件标题"
        age={20}
        arr={["qz", "dd", "qzfrato"]}
        user={user}
      />
      <NavComponent navs={navs1} />
    </div>
  );
}

export default App;
