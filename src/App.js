import React from 'react'
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Overview from './pages/overview/overview';
import Login from './pages/login/login';
import Home from './pages/home/home-page';
import SignUp from './pages/sign-up/sign-up';
import Profile from './pages/profile/profile';
import Transactions from './pages/transaction/transactions';
import Sending from './pages/sending/sending';
import ReceiverDetail from './component/send-money/reciever-details';
import ConnectMono from './component/button/mono-connect';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
        <Route path="/send" element={<Sending/>}/>
        <Route path="/verifer" element={<ReceiverDetail/>}/>
        <Route path="/mono-connect" element={<ConnectMono/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
