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
import ParentComponent from "./DataComponent/ParentComponent";
import ComposeComponent1 from "./DataComponent/ComposeConponent1";
import ComposeComponent2 from "./DataComponent/ComposeComponent2";
import StateDemo from "./StateComponent/StateDemo";
import StateUpdate from "./StateComponent/StateUpdate";
import SetStateDemo from "./StateComponent/SetStateDemo";
import PropsStateDemo from "./StateComponent/PropsStateDemo";
import OneLifeCycle from "./LifeCycleComponent/OneLifeCycle";
import TwoLifeCycle from "./LifeCycleComponent/TwoLifeCycle";
import ThreeLifeCycle from "./LifeCycleComponent/ThreeLifeCycle";
import FormTest1 from "./FormComponent/FormTest1";
import FormTest2 from "./FormComponent/FormTest2";
import FormTest3 from "./FormComponent/FormTest3";
import PropsPtext1 from "./Props/Ptext1";
import ContextPtext1 from "./Context/Ptext1";
import FragMentDemo from "./Fragments/FragmentDemo";
import MyError from "./Fragments/MyError";
import List from "./Fragments/List";
import ErrorBoundary from "./Fragments/ErrorBoundary";

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
  const navs2 = ["聊天", "图片", "视频", "地图"];
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
      {/* <Parent />
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
      <NavComponent navs={navs2} />
      <ParentComponent />  */}
      {/* 在当前父组件中，传递视图给子组件，这就叫组件组合 */}
      {/* <ComposeComponent1>
        <div>
          <h3>组合标题</h3>
          <p>组合内容</p>
        </div>
      </ComposeComponent1>
      <ComposeComponent2>
        <div>
          <h2>组合标题2</h2>
          <p>组合内容2</p>
        </div>
      </ComposeComponent2> */}
      {/* <StateDemo />
      <StateUpdate />
      <SetStateDemo />
      <PropsStateDemo></PropsStateDemo> */}
      {/* 生命周期 */}
      {/* <OneLifeCycle  /> */}
      {/* <TwoLifeCycle /> */}
      {/* <ThreeLifeCycle /> */}
      {/* 表单 */}
      {/* <FormTest1 />
      <FormTest2 />
      <FormTest3 /> */}
      {/* <PropsPtext1 />
      <ContextPtext1 /> */}
      <FragMentDemo />
      <h2>错误边界</h2>
      <List />
      {/* <MyError /> */}
      <ErrorBoundary>
        <MyError />
      </ErrorBoundary>
    </div>
  );
}

export default App;
