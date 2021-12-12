import { Link } from "react-router-dom"
import Footer from "../../component/footer/footer"
import Navbar from "../../component/navbar/navbar"

function SignUp(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="card login-sign-in">
                    <h1>Welcome To Team-Bracket Bank</h1>
                    <form>
                        <div className="input-container">
                            <label for="first-name">First Name</label>
                            <input type="text" placeholder="First Name" id="first-name" required/>
                        </div>
                        <div className="input-container">
                            <label for="last-name">Last Name</label>
                            <input type="text" placeholder="Last Name" id="last-name" required/>
                        </div>
                        <div className="input-container">
                            <label for="phone">Phone Number</label>
                            <input type="number" placeholder="Phone Number" id="phone" required/>
                        </div>
                        <div className="input-container">
                            <label for="password">Password</label>
                            <input type="password" placeholder="Enter Your Password" id="password" required/>
                        </div>
                        <div className="input-container">
                            <label for="c-password">Comfirm Password</label>
                            <input type="password" placeholder="Re-Type Your Password" id="c-password" required/>
                        </div>
                        <div className="row">
                            <div className="login-btn">
                                <button>Sign-up</button>
                            </div>
                            <div>
                                <p><Link to="/login">Already have an account? Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default SignUp