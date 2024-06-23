import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logos/headerLogo'
import './style.css'

export default function Header() {
    return (
        <header className='container'>
            <div className="logo">
                <Logo />
            </div>
            <nav className="links">
                <Link to={'/'}>Home</Link>
                <Link to={'/whats-up'}>What's up?</Link>
                <span>Go Check</span>
                <Link to={'/register'}>Give it a try</Link>
                <Link to={'/contact-us'}>Contact us</Link>
            </nav>
            <div className="help">
                <img width="40" height="40" src="https://img.icons8.com/windows/96/F5F8F4/online-support.png" alt="online-support" />
            </div>
            <div className="option">
                |||
            </div>
        </header>
    )
}