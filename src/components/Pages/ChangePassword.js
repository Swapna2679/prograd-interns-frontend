import React from 'react';
import { FaTimes } from 'react-icons/fa';
function ChangePassword(props) {
     return (props.trigger)?(
      <div>
      <button id="btn" className='close-btn' onClick={()=>props.setTrigger(false)}><FaTimes/></button>
      <label></label>
      <input/>
      <label></label>
      <input/>
      <button id="btn" >Set</button>
      </div>
  ):""; 
}

export default ChangePassword
