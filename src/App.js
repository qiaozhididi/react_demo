import "./App.css"; //找相对路径
import Demo from "./Component/Demo"; 
import MyComponent from "./Component/MyComponent";
import IFDemo from "./Component/IFDemo";
import ListView from "./Component/ListView";
import DataListView from "./Component/DataListView";
import KeyDemo from "./Component/KeyDemo"

function App() {
  const name = "QzFrato";
  const element = <p>{name}</p>;
  const image = (
    <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.e6iItqBlqt6l6K261WPMXAHaFj?rs=1&pid=ImgDetMain" />
  );
  const imgUrl = "https://tse2-mm.cn.bing.net/th/id/OIP-C.sOzZsfZV9rc7epSGktkNqwHaGL?rs=1&pid=ImgDetMain"
  const image2 = <img src={imgUrl} />

  return (
    <div className="container">
      <h1>Hello World!{element}</h1>
      {/* {image} */}
      {/* {image2} */}
      <div>
        <h2 style={{color:'red'}}>标题</h2>
      </div>
      {/* <Demo/> */}
      {/* <MyComponent /> */}
      {/* <IFDemo /> */}
      <ListView/>
      <DataListView/>
      <KeyDemo/>
    </div>
  );  
}

export default App;
