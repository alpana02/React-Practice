import "./index.css";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
      alert("min limit reached");
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{count}</h1>
          <div className="btn_div">
            <button onClick={IncNum}>Increase</button>
            <button onClick={DecNum}>Decrease</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
