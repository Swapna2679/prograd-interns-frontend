import React,{useState} from 'react'
import './signUp.css'
import {FaTimes} from 'react-icons/fa';
function PopUp(props) {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [error,setError]=useState("");

    async function onSignUp(e){
        e.preventDefault();
        const regexName = /^[a-zA-Z]*$/;
        const regexEmail =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        const regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if(!regexName.test(firstName)||firstName.length<3){
            setError("FirstName is not valid")
            return
        }
        else if(!regexName.test(lastName)||lastName.length<3){
            setError("LastName is not valid")
            return
        }
        else if(!regexEmail.test(email)){
            setError("Email is not valid ")
            return
        }
        else if(!regexPass.test(password)){
            setError("Password should be of minimum length 8 and only contain letters and digits")
            return
        }
        else if(confirmPassword !== password){
            setError("Password doesnt match");
            return 
        }
        else{
            props.setTrigger(false);
            props.setLogged(true);
        }
        const user={
            firstName: firstName,
            lastName: lastName,
            email:email,
            password: password,
        };
       

        let result = await fetch("https://jsonplaceholder.typicode.com/users",{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "content-Type":'application/json',
                "Accept":'application/json'
            }
            
        })
        result = await result.json()
        console.log("result",result)
    }

    return (props.trigger)?(
        <div className='popup-outer'>
            <div className='popup-inner'>
                <button id="btn" className='close-btn' onClick={()=>props.setTrigger(false)}><FaTimes/></button>
                {props.children}

                <form className='ip' onSubmit={(e)=>{onSignUp(e)}}>
                    <p>
                    <label>First Name: </label>
                    <input 
                    type="text" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    required/>
                    </p>

                    <p>
                    <label>Last Name: </label>
                    <input
                    type="text" 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    required/>
                    </p>
                    
                    <p>
                    <label>Email: </label>
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required/>
                    </p>

                    <p>
                    <label>Password: </label>
                    <input 
                    type="password"
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    required/>
                    </p>

                    <p>
                    <label>Confirm Password: </label>
                    <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    required/>
                    </p>

                    <p style={{color:"red", fontSize:"12px"}}>{error}</p>
                    
                    <button id="btn" >Signup</button>
          
                </form> 
           
            </div>
        </div>
  ):"";
}

export default PopUp


    