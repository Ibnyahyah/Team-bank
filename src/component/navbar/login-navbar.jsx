import React from 'react';
import { Link } from "react-router-dom";

class LoginNavbar extends React.Component{
    state = {
        clicked: false
    }
    handleClick = ()=>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
    return(
        <div className="container nav-container">
            <nav>
                <header>Logo</header>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                <ul  className={this.state.clicked ? "item active" : "item"}>
                    <li><Link to="/overview">Overview</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/">Help Desk</Link></li>
                    <button className="btn2">Log-out</button>
                </ul>
                <button className="btn1">Log-out</button>
            </nav>
        </div>
    )
}
}
export default LoginNavbar;