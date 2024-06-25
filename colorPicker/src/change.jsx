import React from "react";
import { useState } from "react";



function Chge(){
   
    const [color, setColor] = useState("#A020F0");

    function changeColor(e){
        setColor(e.target.value);
    }

    return(
        <>
            <div id="container">
                <h1> Color Picker</h1>
                <div id="display" style={{backgroundColor: color}}>
                    <p> Color: {color}</p>
                </div>
                <label>
                    Select 
                </label>
                <input type="color" value={color} onChange={changeColor}/>
            </div>
            
        </>

    );
}

export default Chge;