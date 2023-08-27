import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import { useState } from 'react';
import Login from './pages/Login';

function App() {
  const [loginStatus,setLoginStatus] = useState(false)
  const [uid,setUid] = useState(undefined)
  function Credentials(id,pass){  // validation code here
    // console.log("id is",id,"pass is",pass);
    setUid(id)
    return Boolean(id)
  }
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home loginStatus={loginStatus} />}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/login' element={Login(Credentials)}/>
        </Routes>
      </Router>
      <p>App</p>
      <button onClick={()=>{setLoginStatus((e)=>!e)}}>btn</button>
    </>
  );
}



export default App;
