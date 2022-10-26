import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {

    return (
        <nav className="header">
            <Link to="/">
            <img
                className="header__logo" 
                src="https://user-images.githubusercontent.com/73184313/127357168-a7ff7bd7-6ddd-489f-bf13-e43e764118b2.png" 
                alt='ecommerce website logo' />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav" >
                <Link to="/Login" className="header__link">
                    <div className="header__option">
                        <span>Hello ${}</span>
                        <span>Sign In</span>
                    </div>
                </Link>

                <Link to="" className="header__link" >
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>

                <Link to="" className="header__link" >
                    <div className="header__option">
                        <span>Your</span>
                        <span>Profile</span>
                    </div>
                </Link>

                {/* 4th Link */}
            </div>
        </nav>
    )
}

export default Header;