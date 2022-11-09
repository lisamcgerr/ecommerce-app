import React, { useState } from 'react';
import '../style/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://user-images.githubusercontent.com/73184313/127357168-a7ff7bd7-6ddd-489f-bf13-e43e764118b2.png" 
                    alt='ecommerce website logo' />
            </Link>
            <div className="login__container">
                <h1 className="login__title">Sign In</h1>
                <form>
                    <h5 className="login__inputLabel">Email</h5>
                    <input
                        className="login__input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="text" />

                    <h5 className="login__inputLabel">Password</h5>
                    <input
                        className="login__input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password" />

                    <button className="login__signInButton">Sign In</button>
                </form>
                <p className="login__conditions">By signing-in you agree & accept the ECOMMERCE WEBSITE Conditions of Use & Sale.</p>
                <button className="login__registerButton">Create Account</button>
            </div>
        </div>
    )
}

export default Login;