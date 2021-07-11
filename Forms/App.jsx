import React, { useState } from "react";
import "./index.css";


const App = () => { 

    const [name,setName] = useState(""); //name - current data, usestate = initial value, setname - stores updated data
    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        setName(event.target.value);
    };

    const onSubmit = () => {
        setFullName(name);
    };
    return(
    <>
        <div>
            <h1>Hello {fullName} </h1>
            <input 
                type='text' 
                placeholder="Enter your Name"
                onChange={inputEvent} 
                value={name}
            />
            <button onClick={onSubmit} >Click me</button>
        </div>
    </>
    );
};
export default App;
