import "./App.css"; //找相对路径
import Demo from "./Demo"; 

function App() {
  const name = "QzFrato";
  const element = <h1>{name}</h1>;
  const image = (
    <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.e6iItqBlqt6l6K261WPMXAHaFj?rs=1&pid=ImgDetMain" />
  );
  const imgUrl = "https://tse2-mm.cn.bing.net/th/id/OIP-C.sOzZsfZV9rc7epSGktkNqwHaGL?rs=1&pid=ImgDetMain"
  const image2 = <img src={imgUrl} />

  return (
    <div className="container">
      <h1>Hello World!{element}</h1>
      {image}
      {image2}
      <div>
        <h2 style={{color:'red'}}>标题</h2>
      </div>
      <Demo/>
    </div>
  );  
}

export default App;
