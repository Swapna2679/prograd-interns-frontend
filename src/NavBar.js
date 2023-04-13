import React,{useRef,useState} from 'react'
import {FaBars , FaTimes} from 'react-icons/fa';
import './Navbar.css'
import { Link } from 'react-router-dom';
import Account from './components/Pages/Account';
import ChangePass from './components/Pages/ChangePassword';
import SearchBar from "./components/Home/Searchbar";
import Home from './components/Home/HomePage'
import SignUp from './components/signUp/SignUp'
import Login from './components/Login/login'


function NavBar(props) {

    const [triggerAcc,setTriggerAcc]=useState(false);
    const [triggerPass,setTriggerPass]=useState(false);
    const [displayLog,setDisplayLog]=useState(false);
    const [displaySig,setDisplaySig]=useState(false);
    
    const navRef=useRef();
    const showNavbar =()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (props.logged)?(
    <>
        <header>
        <Link to='/' style={{textDecoration:'none',color:'black'}}> <h1><b>Art Gallery</b></h1>  </Link>
        <nav ref={navRef} className='Link'>
            <Link to='/'onClick={()=>{setTriggerAcc(true)}}>Account</Link>
            <Account trigger={triggerAcc} setTrigger={setTriggerAcc}/>
            <Link to='/'onClick={()=>{setTriggerPass(true)}}>Change Password </Link>
            <ChangePass trigger={triggerPass} setTrigger={setTriggerPass}/>
            <Link to='/' onClick={()=>{props.setLogged(false)}}>Logout</Link>
           
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
    <body>
      <SearchBar/>
      <Home />
    </body> 
    </>
  ):(
    <>
      <header className='Link'>
      <Link to='/' style={{textDecoration:'none',color:'black'}}> <h1><b>Art Gallery</b></h1>  </Link>
      <nav ref={navRef}>    
        <Link to='/' onClick={()=>{setDisplaySig(true)}}>SigUp</Link> 
        <SignUp trigger={displaySig} setTrigger={setDisplaySig} setLogged={props.setLogged}/>
        <Link to='/' onClick={()=>setDisplayLog(true)}>Login</Link> 
        <Login trigger={displayLog} setTrigger={setDisplayLog} setLogged={props.setLogged}/>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button> 
    </header>
    <body>
        <Home /> 
    </body> 
    </> 
  )
}

export default NavBar