import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'
// import Abc from './Abc'


function Header(props) {
  // console.log(props);
  const [loginStyle,setLoginStyle] = useState({})
  useEffect(() => {
    (props.loginStatus)?setLoginStyle({display:'none'}):setLoginStyle({})
  }, [props.loginStatus])
  
  return (
    <header>
      <h1>Gudlavalleru Engineering College</h1>
      <nav>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/library"}>Library</Link></li>
        <li><Link to={"/ecap"}>Ecap</Link></li>
        <li><Link to={"/about"}>About</Link></li>    
        <li className='inverted-btn' style={loginStyle}>
          <Link to={"/login"}>Login</Link>
        </li>
        {/* {console.log('rendering')} */}
        {/* <button onClick={()=>{setLoginStatus((e)=>!e)}}>btn</button> */}
        {/* {Abc("hello 0025")} */}
        {/* {'return "hello"'} */}
      </nav>
    </header>
  )
}

export default Header