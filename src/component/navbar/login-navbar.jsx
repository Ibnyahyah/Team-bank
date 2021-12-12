import { Link } from "react-router-dom";

function LoginNavbar(){
    return(
        <div className="container nav-container">
            <nav>
                <header>Logo</header>
                <ul>
                    <li><Link to="/overview">Overview</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/">Help Desk</Link></li>
                </ul>
                <button>Log-Out</button>
            </nav>
        </div>
    )
}
export default LoginNavbar;