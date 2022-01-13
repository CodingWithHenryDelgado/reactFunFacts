import React from 'react';
import reactLogo from "../images/reactjs-icon.svg";

export default function Navbar() {
    return (
        <div className='navbar'>
            <img className='navbar-logo' src={reactLogo} alt="React Logo"/>
            <h3 className='navbar-facts'>ReactFacts</h3>
            <h4 className='navbar-text'>React Course - Project 1</h4>
        </div>
    );
}