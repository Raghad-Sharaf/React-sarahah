import axios from 'axios';
import React, { useState } from 'react';
import Joi from 'joi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
  let [user,setUser]= useState({
    userName:"",
    email:"",
    password:"",
    cpassword:""
  })

  let getUser = (e)=>{
   setUser({...user,[e.target.name]:e.target.value});
  }
  let navigate = useNavigate();
  function goToLogin(){
    let path = '/login';
    navigate (path);
  }
  let [errorList,setErrorList] = useState([]);
  let [errorMsg,setErrorMsg] = useState('');
  async function submitFormData(e){
    e.preventDefault();
    let {data} = await axios.post("http://localhost:3003/api/v1/auth/signup",user);
    if (data.message == 'done')
    {
     goToLogin();
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
      userName:Joi.string().required().min(3).max(10),
      email:Joi.string().email().required(),
      password:Joi.string().required().pattern(new RegExp('^[a-z][0,9]{3}$')),
      cpassword:Joi.string().valid(Joi.ref('password')).required()
    })
    return schema.validate(user,{abortEarly:false})
  }
  return (
    <div className="container text-center my-5">
    <div className="user my-3">
      <i className="fas fa-user-secret user-icon" />
      <h4 className="login">Register</h4>
    </div>
    {errorMsg?<div className='alert alert-danger w-50 m-auto'>{errorMsg}</div>:''}
    
    <div className="card p-5 w-50 m-auto">
      {errorList.map((error,index)=> <div key={index} 
      className="alert alert-danger">
        {error.message}
      </div>)}
      <form method="POST" action="/handleLogin" onSubmit={submitFormData}>
        <input onChange={getUser} className="form-control" placeholder="Enter your name" type="text" name="userName" />
        <input onChange={getUser} className="form-control my-4" placeholder="Enter your email" type="email" name="email" />
        <input onChange={getUser} className="form-control my-4 " placeholder="Enter your Password" type="password" name="password" />
        <input onChange={getUser} className="form-control my-4 " placeholder="Enter Confirm Password" type="password" name="cpassword" />
        <button className="btn btn-default-outline" type='submit'>Register</button>
      </form>
    </div>
  </div>
  )
}

export default Register