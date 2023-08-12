import logo from "./logo.svg";
import "./App.css";
import dummy from "./assets/dummy.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={dummy} width="200px" />
        <img
          src="http://dorsin.react.themesbrand.com/assets/images/team/img-1.jpg"
          width="200px"
        />
        <p>Abdul Basit Ahmed</p>
        <p>First Class of React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
