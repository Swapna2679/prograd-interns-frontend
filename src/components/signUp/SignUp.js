import React,{useState} from 'react'
import './signUp.css'

function PopUp(props) {

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [error,setError]=useState("")

    async function onSignUp(e){
        e.preventDefault();
        if(confirmPassword !== password){
            setError("Password doesnt match");
            return 
        }
        else{
            props.setTrigger(false);
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
                <button id="btn" className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
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


    