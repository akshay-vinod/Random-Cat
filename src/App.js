import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState(
    "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg"
  );
  const makeRequest = () => {
    console.log("hai");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="border">
          <img src={url} className="object" alt="cat" />
        </div>
        <button className="button-57" role="button" onClick={makeRequest}>
          <span className="text">Click</span>
          <span>Random Cat</span>
        </button>
      </header>
    </div>
  );
}

export default App;
