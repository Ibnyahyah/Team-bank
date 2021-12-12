import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="container nav-container">
            <nav>
                <header>Logo</header>
                <ul>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Business</Link></li>
                    <li><Link to="/">Personal</Link></li>
                    <li><Link to="/">Help Desk</Link></li>
                </ul>
                <button><Link to="/login">Get Started</Link></button>
            </nav>
        </div>
    )
}
export default Navbar;