import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
     <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    </>
  )
}

export default App