import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
          <button onClick={() => setCount(count + 1)}>Increase Count</button>
          <button onClick={() => count && setCount(count - 1)}>
            Decrease Count
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
