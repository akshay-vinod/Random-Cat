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
        }, 2000);
        setUrl(data.url);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="border">
          {loader ? (
            <div className="spinner-4"></div>
          ) : (
            <img src={url} className="object" alt="cat" />
          )}
        </div>
        <div className="button" id="button" onClick={makeRequest}>
          😸
        </div>
      </header>
    </div>
  );
}

export default App;
