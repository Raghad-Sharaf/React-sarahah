import axios from 'axios';
import React, { useState } from 'react';
import Joi from 'joi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  let [user,setUser]= useState({
    email:"",
    password:""
  })

  let getUser = (e)=>{
   setUser({...user,[e.target.name]:e.target.value});
  }
  let navigate = useNavigate();
  function goToHome(){
    let path = '/';
    navigate (path);
  }
  let [errorList,setErrorList] = useState([]);
  let [errorMsg,setErrorMsg] = useState('');
  async function submitFormData(e){
    e.preventDefault();
    let {data} = await axios.post("http://localhost:3003/api/v1/auth/signin",user);
    if (data.message == 'login')
    {
     goToHome();
    }else{
      setErrorMsg(data.message)
    }
    let validateResult = validateForm();
    if (validateResult.error){
      setErrorList(validateResult.error.details);
    }
    console.log(validateResult)
  }

  function validateForm(){
    const schema = Joi.object({
      email:Joi.string().email().required(),
      password:Joi.string().required().pattern(new RegExp('^[a-z][0,9]{3}$'))
    })
    return schema.validate(user,{abortEarly:false})
  }
  return (
    <div className="container text-center my-5">
    <div className="user my-3">
      <i className="fas fa-user-secret user-icon" />
      <h4 className="login">Login</h4>
    </div>
    {errorMsg?<div className='alert alert-danger w-50 m-auto'>{errorMsg}</div>:''}
    
    <div className="card p-5 w-50 m-auto">
      {errorList.map((error,index)=> <div key={index} 
      className="alert alert-danger">
        {error.message}
      </div>)}
      <form method="POST" action="/handleLogin" onSubmit={submitFormData}>
        <input onChange={getUser} className="form-control my-4" placeholder="Enter your email" type="text" name="email" />
        <input onChange={getUser} className="form-control my-4 " placeholder="Enter your Password" type="text" name="password" />
        <button className="btn btn-default-outline" type='submit'>Login</button>
        <div>
        <p><Link className="text-muted forgot btn" to="">I Forgot My Password</Link></p>
        <Link className="btn btn-default-outline" to="/register">Register</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login