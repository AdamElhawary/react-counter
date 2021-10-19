import React, { useState } from "react";
import CustomBtn from "../ReusableButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ margin: "5rem" }}>
      <h1 style={{ textAlign: "center" }}>Counter: {count}</h1>
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
    </div>
  );
};

export default Counter;
