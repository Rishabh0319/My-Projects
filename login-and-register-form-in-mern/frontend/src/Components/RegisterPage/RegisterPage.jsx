import React, { useState } from 'react';
import "./RegisterPage.css";

const RegisterPage = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  console.log(user);
  return (
    <div className='RegisterPage'>
      <h1 className='heading'>Register</h1>
      <input className='input-fields' type='text' placeholder='Your Name' name='name' value={user.name} onChange={inputHandler} />
      <input className='input-fields' type='email' placeholder='Your Email' name='email' value={user.email} onChange={inputHandler} />
      <input className='input-fields' type='password' placeholder='Your Password' name='password' value={user.password} onChange={inputHandler} />
      <input className='input-fields' type='password' placeholder='Re-enter Password' name='reEnterPassword' value={user.reEnterPassword} onChange={inputHandler} />
      <button className='register-btn btn'>Register</button>
      <span>or</span>
      <button className='login-btn btn'>Login</button>
    </div>
  )
}

export default RegisterPage