import "./App.css"; //找相对路径
import Demo from "./Component/Demo";
import MyComponent from "./Component/MyComponent";
import IFDemo from "./Component/IFDemo";
import ListView from "./Component/ListView";
import DataListView from "./Component/DataListView";
import KeyDemo from "./Component/KeyDemo";
import EventDemo from "./Component/EventDemo";
import EventObjDemo from "./Component/EventObjDemo";
import EventParamsDemo1 from "./Component/EventParamsDemo1";
import EventParamsDemo2 from "./Component/EventParamsDemo2";
import EventListDemo from "./Component/EventListDemo";
import FunComponent from "./Component/FunComponent";
import ClassComponent from "./Component/ClassComponent";

function App() {
  const name = "QzFrato";
  const element = <p>{name}</p>;
  const image = (
    <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.e6iItqBlqt6l6K261WPMXAHaFj?rs=1&pid=ImgDetMain" />
  );
  const imgUrl =
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.sOzZsfZV9rc7epSGktkNqwHaGL?rs=1&pid=ImgDetMain";
  const image2 = <img src={imgUrl} />;

  return (
    <div className="container">
      <h1>Hello World!{element}</h1>
      {/* {image} */}
      {/* {image2} */}
      <div>
        <h2 style={{ color: "red" }}>标题</h2>
      </div>
      {/* <Demo/> */}
      {/* <MyComponent /> */}
      {/* <IFDemo /> */}
      {/* <ListView/>
      <DataListView/> */}
      {/* <KeyDemo/> */}
      <EventDemo />
      <EventObjDemo />
      <EventParamsDemo1 />
      <EventParamsDemo2 />
      <EventListDemo />
      <FunComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
