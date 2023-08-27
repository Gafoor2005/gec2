import React, { useState } from 'react'
// import Credentials from '../App'
import './Login.css'
import Logo from '../assets/gecLogo.jpg'

function Login(sendCredentials) {
  const [id, setId] = useState('')
  const [pass, setPass] = useState('')
  const [passType,setPassType] = useState("password")
  const verify = () => {
    document.querySelectorAll('input').forEach((e)=>{
      e.disabled = true
    })
    let res = sendCredentials(id,pass)
    if(res){console.log("login success");}
    else{console.error("login failed");}
    // console.log("res is",res);
  }
 
  return (
    <div className="Login">
      <div className="card">
        <h3>Login</h3>
        <h5>Enter User ID</h5>
        <input type="text" title='enter user ID (roll no)' placeholder='enter id (roll no)' name='id' id='id' onChange={(e) => { setId(e.target.value) }} value={id} />
        <h5>Enter Password</h5>
        <input type={passType} title='enter password' placeholder='enter password' name='password' id='pass' onChange={(e) => { setPass(e.target.value) }} value={pass} />
        <div className="checkout">
          <div className='left'>
            <div>
              <input type="checkbox" name="showPass" onClick={
                (e)=>{(e.target.checked)?setPassType('text'):setPassType('password');}
              } id="showPass" title='show password' />  
              show password
            </div>
            <div>
              <input type="checkbox" name="stayLoggnedIn" id="stayLoggedIn" title='stay logged in' />
              stay logged in
            </div>
          </div>
          <button onClick={verify}>Login</button>
        </div>
      </div>
      <hr />
      <div className="img">
        <img src={Logo} alt="gec logo" />
        <h2>SESHADRI RAO<br />GUDLAVALLERU ENGINEERING COLLEGE</h2>
      </div>
    </div>
  )
}

export default Login