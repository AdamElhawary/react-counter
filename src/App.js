import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomBtn from "./components/ReusableButton";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created by <code>Mohamed Adel Mohamed Ismail</code> for ITI.
        </p>
        <h1>Counter: {count}</h1>
        <div className="btns">
          <CustomBtn
            text={"Increase Count"}
            onClick={() => setCount(count + 1)}
          />
          <CustomBtn
            text={"Decrease Count"}
            onClick={() => count && setCount(count - 1)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
