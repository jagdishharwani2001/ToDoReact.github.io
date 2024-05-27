import React, { useState } from "react"
const LudoGame = ()=>{
    let [moves,setmoves] = useState({blue:0,yellow:0,green:0,red:0})
    let UpdateBlue = ()=>{
        console.log(`moves.blue = ${moves.blue}`);
        setmoves((preValue)=>{
            return {...preValue,blue:preValue.blue + 1}
        });
    }
    return(
        <>
            <p>Let's Begin</p>
            <div>
                <p>Blue Moves :{moves.blue}</p>
                <button onClick={UpdateBlue} style={{background:"blue"}}>+1</button>
                <p>Yellow Moves :{moves.yellow}</p>
                <button style={{background:"yellow"}}>+1</button>
                <p>Green Moves :{moves.green}</p>
                <button style={{background:"green"}}>+1</button>
                <p>Red Moves :{moves.red}</p>
                <button style={{background:"red"}}>+1</button>
            </div>
        </>
    )
}
export default LudoGame;