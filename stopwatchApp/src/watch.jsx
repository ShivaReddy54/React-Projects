import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Watch(){

    const [isrun, setIsrun] = useState(false);
    const [timepass, setTimepass] = useState(0);
    const startref = useRef(null);
    const intervalId = useRef(0);

    useEffect(() => {
        if(isrun){
            intervalId.current = setInterval(() => {
                setTimepass(Date.now() - startref.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalId.current);
        }
    }, [isrun]);

    function start(){
        setIsrun(true);
        startref.current = Date.now() - timepass;
    }
    function stop(){
        setIsrun(false);
    }
    function reset(){
        setIsrun(false);
        setTimepass(0);
    }
    function formatTim(){
        let hrs = Math.floor(timepass / (1000 * 60 * 60));
        let mins = Math.floor(timepass / (1000 * 60) % 60 );
        let secs = Math.floor(timepass / (1000) % 60 );
        let millsecs = Math.floor((timepass % 1000) / 10 );

        hrs = String(hrs).padStart(2, "0");
        mins = String(mins).padStart(2, "0");
        secs = String(secs).padStart(2, "0");
        millsecs = String(millsecs).padStart(2, "0");

        return `${hrs}:${mins}:${secs}:${millsecs}`;

    }


    return(
        <>
            <div id="stopwatch">
                <div id="display"> {formatTim()} </div>
                <div id="controls"> 
                    <button id="st-btn" onClick={start}>Start</button>
                    <button id="stop-btn" onClick={stop}>stop</button>
                    <button id="reset-btn" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default Watch;