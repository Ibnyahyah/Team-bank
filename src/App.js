import React from 'react'
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Overview from './pages/overview/overview';
import Login from './pages/login/login';
import Home from './pages/home/home-page';
import SignUp from './pages/sign-up/sign-up';
import Profile from './pages/profile/profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
