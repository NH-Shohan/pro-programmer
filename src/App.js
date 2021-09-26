import "./App.css";
import Header from "./Components/Header/Header";
import Programmer from "./Components/Programmer/Programmer";

function App() {
  return (
    <div className="App">
      {/* body */}
      <div className="body">
        <Header></Header>
        <Programmer></Programmer>
      </div>
    </div>
  );
}

export default App;
