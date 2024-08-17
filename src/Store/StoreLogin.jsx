import React, { useRef } from 'react'
import '../StoreStyle/StoreLogin.css'
import { useNavigate } from 'react-router-dom'

const StoreLogin = () => {

        let email=useRef()
        let pass=useRef()
       
        let err='border:solid 2px red; background:rgba(255,0,0,0.5) '
        let nav=useNavigate()
        let log=(e)=>{
            e.preventDefault();
            if(email.current.value==="user@gmail.com" && pass.current.value==="123")
                nav('/home')
            else{
                email.current.style.cssText=err; 
                pass.current.style.cssText=err;
            }
        }
    
  return (
    <div className='main'> 

    <div className="log">
    <br />
      <h1>LOGIN</h1>
      <center>
      <form action="" onSubmit={log} ><br /><br /><br />
        <input type="email" placeholder='Enter Mail ID'  name="mail" ref={email} /><br /><br /><br />
        <input type="password" placeholder='Enter Password' name="password" ref={pass} /><br /><br /><br />
        <button type='submit'>LOGIN</button>
      </form>
      </center>
      </div>
    </div>
  )
}

export default StoreLogin
