import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Footer from "../../component/footer/footer"
import Navbar from "../../component/navbar/navbar"

import { useDispatch } from 'react-redux'
import { signIn } from '../../actions/auth'

const initialStateField = {
    email: '',
    password: '',
}

function Login(){

    const user = JSON.parse(localStorage.getItem("profile"));
    if(user) window.location.replace("/")

    const dispatch = useDispatch()
    // const history = useHistory();
    const [formData, setFormData] = useState(initialStateField)


    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(signIn(formData))
    }
    const handleChange = (e) => {
        // e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })

    } 

    return(
        <>
        <Navbar/>
            <div class="container">
                <div class="card login-sign-in" style={{marginBottom:'270px'}}>
                    <h1>Welcome Back</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="input-container">
                            <label for="email">Email Address</label>
                            <input type="email" placeholder="Email Address" name="email" required onChange={handleChange}/>
                        </div>
                        <div class="input-container">
                            <label for="password">Password</label>
                            <input type="password" placeholder="Enter Your Password" name="password" required onChange={handleChange}/>
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