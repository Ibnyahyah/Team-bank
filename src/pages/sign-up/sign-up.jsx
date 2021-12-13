import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Navbar from "../../component/navbar/navbar"
import { useDispatch } from 'react-redux'
import { signUp } from '../../actions/auth'

const initialStateField = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
}

function SignUp(){

    const user = JSON.parse(localStorage.getItem("profile"));
    if(user) window.location.replace("/")

    const dispatch = useDispatch()
    // const history = useHistory();
    const [formData, setFormData] = useState(initialStateField)


    const handleSubmit = (e) => {
        e.preventDefault()

        if(formData.password !== formData.confirmPassword){
            alert("Password not match")
            return false
        }
        
        dispatch(signUp(formData))
    }
    const handleChange = (e) => {
        // e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })

    } 

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="card login-sign-in">
                    <h1>Welcome To Team-Bracket Bank</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label for="first-name">First Name</label>
                            <input type="text" placeholder="First Name" name="firstName" required onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label for="last-name">Last Name</label>
                            <input type="text" placeholder="Last Name" name="lastName" required onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label for="phone">Username</label>
                            <input type="text" placeholder="Username" name="userName" required onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label for="phone">Email Address</label>
                            <input type="email" placeholder="Email Address" name="email" required onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label for="password">Password</label>
                            <input type="password" placeholder="Enter Your Password" name="password" required onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label for="c-password">Comfirm Password</label>
                            <input type="password" placeholder="Re-Type Your Password" name="confirmPassword" required onChange={handleChange} />
                        </div>
                        <div className="row">
                            <div className="login-btn">
                                <button type="submit">Sign-up</button>
                            </div>
                            <div>
                                <p><Link to="/login">Already have an account? Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp