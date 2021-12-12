import { Link } from "react-router-dom"
import Footer from "../../component/footer/footer"
import Navbar from "../../component/navbar/navbar"

function Login(){
    return(
        <>
        <Navbar/>
            <div class="container">
                <div class="card login-sign-in" style={{marginBottom:'270px'}}>
                    <h1>Welcome Back</h1>
                    <form>
                        <div class="input-container">
                            <label for="phone">Phone Number</label>
                            <input type="number" placeholder="Phone Number" id="phone" required/>
                        </div>
                        <div class="input-container">
                            <label for="password">Password</label>
                            <input type="password" placeholder="Enter Your Password" id="password" required/>
                        </div>
                        <div class="row">
                            <div class="login-btn">
                                <button>Login</button>
                            </div>
                            <div>
                                <p><Link to="/">Forgotten password?</Link></p>
                                <p><Link to="/sign-up">new Here? Sign-up</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Login