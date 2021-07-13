import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [name, setName] = useState(""); //name - current data, usestate = initial value, setname - stores updated data
  const [lastname, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [lastNamenew, setLastNameNew] = useState("");

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastname);
    alert("Form submitted");
  };

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName} {lastNamenew}
            </h1>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={inputEvent}
              value={name}
            />
            <input
              type="text"
              placeholder="Enter your Last Name"
              onChange={inputEventTwo}
              value={lastname}
            />
            <br />
            <button type="submit">Click me</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
