import React from 'react'
import { Link } from 'react-router-dom'
function Home() {


  return (
   <>
    <h1 className='my-5 p-3 text-center shadow'>Saraha</h1>
    <h3 className='text-center'>Start Texting with your friends and co-worker with Saraha</h3>
    <button  className='m-auto btn btn-outline-success rounded-pill d-block my-4 px-5'>
      <Link className='nav-link' to="login"><span className='text-dark'>Login</span> </Link>
    </button>
    <button className='m-auto btn btn-outline-success rounded-pill d-block my-4 px-5'>
      <Link className="nav-link" to="register"><span className='text-dark'>Register</span></Link>
    </button>
   </>
  )
}

export default Home