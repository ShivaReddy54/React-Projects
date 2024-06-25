import React, { useState } from "react";

function Counter(){
    const [cnt, setCnt] = useState(0);

    const inc = () => {
        setCnt(cnt + 1);
    }
    const dec = () => {
        setCnt(cnt - 1);
    }
    const rest = () => {
        setCnt(0);
    }

    return(
        <>
            <div id="dv">
                <p id="p"> {cnt} </p>

                <button onClick={inc} id="btn"> Increment </button>
                <button onClick={dec} id="btn"> Decrement </button>
                <button onClick={rest} id="btn"> Reset </button>

            </div>
        </>
    );
}

export default Counter;
