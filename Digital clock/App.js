import React, { useState } from "react";
import "./index.css";


const App = () => {  
    let newTime = new Date().toLocaleTimeString();  
    const [cTime, setCtime] = useState(newTime);
    const IncNum = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime); 
};
    setInterval(IncNum,1000) //used to set the interval for function IncNum with interval of 1000 ms
    return(
        <>
        <h1>{cTime}</h1>
        </>
    );
};
export default App;
