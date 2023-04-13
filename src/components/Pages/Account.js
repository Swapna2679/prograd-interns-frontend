import React from 'react'
import { FaTimes } from 'react-icons/fa';

function Account(props) {
  return (props.trigger)?(
    <div className='popup-outer'>
      <div className='popup-inner'>
        <button id="btn" className='close-btn' onClick={()=>props.setTrigger(false)}><FaTimes/></button>
        <h1>Name</h1>
        <h1>E-Mail</h1>
      </div>
    </div>
  ):"";
}

export default Account
