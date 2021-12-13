import React, { useState } from 'react'
import { Link } from "react-router-dom"
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
            <main>
                <div className="container loging-sign-up">
                    <div className="row">
                        <div className="col-6-sm col-5-md col-6-lg welcome">
                            <header>
                                <h2>
                                    Free to join Team-Bank
                                </h2>
                            </header>
                            <img src="./imgs/signup-image.png" alt=""/>
                        </div>
                        <div className="col-6-sm col-6-lg">
                            <div className="form">
                                <form onSubmit={handleSubmit}>

                                    <input className="input-name" type="text" required name="firstName" placeholder="First Name" onChange={handleChange}/>
                                    <input className="input-name" type="text" required name="lastName" placeholder="Last Name" onChange={handleChange}/><br/><br/>
                                    <input className="input-content" type="text" name="userName" placeholder="Username" required onChange={handleChange}/><br/><br/>
                                    <input className="input-content" type="email" name="email" placeholder="Email Address" required onChange={handleChange}/><br/><br/>
                                    <input className="input-content" type="password" name="password" placeholder="Password" required onChange={handleChange}/><br/><br/>
                                    <input className="input-content" type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange}/><br/><br/>
                                    <button>Sign-up</button><br/><br/>
                                    </form>
                                    <div className="display-f  justify-between">
                                        <p>Already have an account? <Link to="/login">Login</Link></p>
                                        <a href="/" className="password" style={{marginLeft: '65px'}}>Forget Password?</a><br/><br/>
                                    </div>
                                    <hr/>
                                    <div className="display-f justify-between">
                                        <p>Or Login with socials</p>
                                        <i className='bx bxl-instagram'></i>
                                        <i className='bx bxl-facebook-square'></i>
                                        <i className='bx bxl-gmail'></i>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default SignUp