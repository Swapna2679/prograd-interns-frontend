import React,{useState} from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter } from "react-router-dom";
//secret key:psRZS85EbYI_azLKhCnAsIA1wvJTJoxA5wTnQBUWHSg
//acess key:c_5GHI_6hF96HjT0v20zprIiaReqSrttWSWXTYxAw5Y
//api: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
function App() {
  const [logged,setLogged]= useState(false);
  return (
    <BrowserRouter>
    <div>
      <NavBar logged={logged} setLogged={setLogged}/>  
    </div>
    </BrowserRouter>
    
  );
}

export default App;