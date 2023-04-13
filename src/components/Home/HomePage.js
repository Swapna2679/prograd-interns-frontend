import React from "react";
import "./images.css"
import LoadImages from './API.js'
function mainpage(props){
return(
    <>
    {/* <div className="grid-container">
    <img className="images" src= {props.src}  alt=""/>
    </div> */}
    <div className="grid-container">
        <LoadImages />
    </div>
    </>
)
   
}
export default mainpage;