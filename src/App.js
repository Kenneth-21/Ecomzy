import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <Routes>
		  	<Route path='/' element={<Home />}></Route>
		  	<Route path='/cart' element={<Cart/>}></Route>
		  </Routes>
    </div>
  );
}

export default App;
