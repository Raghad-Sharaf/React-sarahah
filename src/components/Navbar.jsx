import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo300.png'
import Login from './Login';
import Register from './Register';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-custom navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src={logo} width={54} alt="Saraha Logo" /> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar