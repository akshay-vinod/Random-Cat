import { useState } from "react";
import "./App.css";

function App() {
  const [loader, setLoader] = useState(false);
  const [url, setUrl] = useState(
    "https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg"
  );
  const makeRequest = async () => {
    fetch("https://thatcopy.pw/catapi/rest/")
      .then((response) => response.json())
      .then((data) => {
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
          setUrl(data.url);
        }, 1000);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="border">
          {loader ? (
            <div className="spinner-3"></div>
          ) : (
            <img src={url} className="object" alt="cat" />
          )}
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
