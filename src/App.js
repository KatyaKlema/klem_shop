import './default.scss';
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main">
            <Homepage/>
        </div>
    </div>
  );
}

export default App;
