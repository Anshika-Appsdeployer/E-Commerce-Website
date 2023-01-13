import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Pgnf from './Components/Pgnf';
import Cart from './Components/Cart';
import Profile from './Components/Profile'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/userprofile" element={<Profile />}></Route>
        <Route exact path="*" element={<Pgnf />} />
      </Routes>
    </>
  );
}

export default App;
