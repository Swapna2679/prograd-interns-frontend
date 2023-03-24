import React, { useState } from 'react';
import './Login.css'

function Demo(props)
{
 // const [close, setClose]=useState(false)
const[email, setEmail]=useState('');
const[password, setPassword]=useState('')
const Logininfo=(e)=>{
  e.preventDefault();
  const user={ 
    email:email,
    password: password,
};
console.log(user);
   props.setTrigger(false)
} 

    if(props.trigger){
   return (
        <>
        <div className='container-box'>
        <div className='popup'>
      <form onSubmit={e =>{Logininfo(e)}}>
      <button id="btn" className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
      <br/>
        <h3>Login</h3>
      <label>E-mail: </label>
      <input type="email" name="email" placeholder='E-mail ID' id="loginMail" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <br/><br/>
      <label>Password: </label>
      <input type="password" name="pass" placeholder='Password' id="loginPassword" value={password} onChange={(e)=>setPassword(e.target.value)} required />
      <br/><br/>
      <button className='close-submit'>Submit</button>
      
    </form>
    <br/>
    </div>
     </div> 
    </>
        
   )
    }
  
       
  
}
 
export default Demo;