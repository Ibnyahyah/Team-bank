import React from 'react';
import { Link } from "react-router-dom";
import { LogOut } from '../button/logoutbtn';

class LoginNavbar extends React.Component{

    state = {
        clicked: false
    }
    handleClick = ()=>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
    return(
        <div className="nav-container">
            <nav className="container"> 
                <header className="font-lg font-4">
                    Team-Bracket
                </header>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                <ul  className={this.state.clicked ? "item active" : "item"}>
                    <li><Link to="/overview">Overview</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/">Help Desk</Link></li>
                    <div className="btn2"><LogOut/></div>
                </ul>
                <div className="btn1"><LogOut/></div>
            </nav>
        </div>
    )
}
}
export default LoginNavbar;