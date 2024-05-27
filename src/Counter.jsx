import React, { useState } from "react";
export default function Counter(){
    let [count,setcount] = useState(0);
    function inc(){
        count = count + 1;
        setcount(count);
        console.log(count)
    }
    return(
        <>
            <h3>Count : {count}</h3>
            <button onClick={inc}>Inc</button>
        </>
    )
}