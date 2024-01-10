// Counter
import React from "react";
import {useEffect} from "react";


const Counter = ({startCounter, stopCounter, counterValue, isCounting, setStartingValue, field}) => {

    useEffect(
        () => {
            if(field > 0){
                setStartingValue(parseInt(field))
            }else{
                setStartingValue(0)
            }
        },[field])


    return (

        <div>
        <button onClick={startCounter} hidden={isCounting} >start</button>
        <button onClick={stopCounter} hidden={!isCounting}>stop</button>
        <h1>{counterValue}</h1>
        </div>

    )
}

export default Counter;