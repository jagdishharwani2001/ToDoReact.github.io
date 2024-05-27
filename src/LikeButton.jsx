import React, { useState } from "react"
export default function LikeButton(){
    let [isLike,setisLiske] = useState(false);
    const Toggleliked = ()=>{
        setisLiske(!isLike);
    }
    let isstyle ={color:"red"}; 
    return(
        <>
            <p onClick={Toggleliked}>
                {isLike?(<i className="fa-solid fa-heart" style={isstyle}></i>):
                (<i className="fa-regular fa-heart"></i>)}
            </p>
        </>
    )
}
