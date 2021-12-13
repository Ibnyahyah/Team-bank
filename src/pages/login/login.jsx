import React, { useState } from 'react'
import { Link } from "react-router-dom"
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
            <main>
                <div className="container loging-sign-up">
                    <div className="row">
                        <div className="col-6-sm col-6-lg welcome">
                            <header>
                                <h2>
                                    Welcome back to Team-Bank
                                </h2>
                            </header>
                            <img src="./imgs/login-image.png" alt=""/>
                        </div>
                        <div className="col-6-sm col-6-lg">
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <input className="input-content" type="email" placeholder="Email Address" required name="email" onChange={handleChange}/><br/><br/>
                                    <input className="input-content" type="password" placeholder="Password" required name="password" onChange={handleChange}/><br/><br/>
                                    <button>Login</button>
                                </form><br/><br/>
                                <div className="text-center">
                                    <a href="/" className="password">Forget Password?</a><br/><br/>
                                    <p>Don't have an account? <Link to="/sign-up">Sign-up</Link></p>
                                    <hr/>
                                    <p className="mb-2">Or Login with socials</p>
                                    <i className='bx bxl-instagram'></i>
                                    <i className='bx bxl-facebook-square'></i>
                                    <i className='bx bxl-gmail' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Login