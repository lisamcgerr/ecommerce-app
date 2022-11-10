import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Signup.css'

const Signup = () => {

    return (
        <div className="signup">
            <Link to="/">
                <img
                    className="signup__logo"
                    src="https://user-images.githubusercontent.com/73184313/127357168-a7ff7bd7-6ddd-489f-bf13-e43e764118b2.png" 
                    alt='ecommerce website logo' />
            </Link>
                <div className="signup__container">
                    <h1 className="signup__title">Sign Up</h1>
                    <form>
                        <h5 className="signup__inputLabel">Email:</h5>
                        <input required
                            className="login__input"
                            type="email" />
                        <h5 className="signup__inputLabel">Password:</h5>
                        <input required
                            className="login__input"
                            type="password" />
                        <h5 className="signup__inputLabel">Password Confirmation:</h5>
                        <input required
                            className="login__input"
                            type="password" />
                        <button
                            type="submit"
                            className="signup__button">
                            Sign In
                        </button>
                    </form>
                </div>

        </div>
    )
}

export default Signup;