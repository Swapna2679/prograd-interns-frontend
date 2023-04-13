import React, { useState } from 'react';
import Login from './login.js'


function Loginbutton(){
    const[show, setShow]=useState(false);
 const handleShow=()=>{
  setShow(true)
 }
console.log(show)
return(
    <div>
        <button onClick={handleShow} className='login-open-btn'>Login</button>
        <Login trigger={show} setTrigger={setShow}/>
        

    </div>
)
}
export default Loginbutton;