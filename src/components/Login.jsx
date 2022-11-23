import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
  let [user,setUser]= useState({
    
    email:"",
    password:""
  })

  let getUser = (e)=>{
   setUser({...user,[e.target.name]:e.target.value});
  }

  let  sendData= async(e)=>{
    e.preventDefault();
    let {data} = await axios.post("http://localhost:3003/api/v1/auth/signin",user);
    console.log(data.message);

  }
  return (
    <div className="container text-center my-5">
  <div className="user my-3">
    <i className="fas fa-user-secret user-icon" />
    <h4 className="login">Login</h4>
  </div>
  <div className="card p-5 w-50 m-auto">
    <form method="POST" action="/handleLogin" onSubmit={sendData}>
      <input className="form-control" placeholder="Enter your email" type="text" name="email" />
      <input className="form-control my-4 " placeholder="Enter your Password" type="text" name="password" />
      <button className="btn btn-default-outline my-4 w-100 rounded" type='submit' to="home">Login</button>
      <p><Link className="text-muted forgot btn" to="">I Forgot My Password</Link></p>
      <Link className="btn btn-default-outline" to="register">Register</Link>
    </form>
  </div>
</div>

  )
}

export default Login