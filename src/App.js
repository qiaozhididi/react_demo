import "./App.css";

function App() {
  const name = "QzFrato";
  const element = <h1>{name}</h1>;
  return (
    <div className="container">
      <h1>Hello World!{element}</h1>
    </div>
  );
}

export default App;
