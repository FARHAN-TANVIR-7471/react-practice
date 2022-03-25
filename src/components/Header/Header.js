import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>My website hadder</h2>
            <nav className='menu'>
                <a href="/">Home</a>
                <a href="/shop"> Shop </a>
                <a href="/about-us"> About Us</a>
            </nav>
        </div>
    );
};

export default Header;