import React, { useState } from 'react';
import "./LoginPage.css";

const LoginPage = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function inputHandler(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div className='LoginPage'>
      <h1 className='heading'>Login</h1>
      <input className='input-fields' onChange={inputHandler} type='text' placeholder='Enter Your Email' name='email' />
      <input className='input-fields' onChange={inputHandler} type='password' placeholder='Enter Your Password' name='password' />
      <button className='login-btn btn'>Login</button>
      <span>or</span>
      <button className='register-btn btn'>Register</button>
    </div>
  )
}

export default LoginPage