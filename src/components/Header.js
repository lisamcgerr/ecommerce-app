import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';
import Home from './Home';

const Header = () => {

    return (
        <nav className="header">
            <Link to="/">
            <img
                className="header__logo" 
                src="https://user-images.githubusercontent.com/73184313/127357168-a7ff7bd7-6ddd-489f-bf13-e43e764118b2.png" 
                alt='ecommerce website logo' />
            </Link>

            <input className="header__searchInput" type="text" />

        </nav>
    )
}

export default Header;