import React from "react"
export default function Count(){
    let count = 0;
    function inc(){
        count = count +1;
        console.log(count);}
        return(<>
            <h1>Count:{count}</h1>
            <button onClick={inc}>Click</button>
        </>);
    }
