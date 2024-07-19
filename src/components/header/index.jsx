// import { Link } from 'react-router-dom';
import HeaderLogo from '../logos/header-logo';
import './style.css'

export default function Header(params) {
    return (
        <header className='header-bar-container'>
            <div className="logo">
                <HeaderLogo />
            </div >
            <nav className="links">
                <a to={'/'}>Home</a>
                <a to={'/whats-up'}>Whats up?</a>
                <a to={'/register'}>Give it a try</a>
                <a to={'/contact-us'}>Contact us</a>
            </nav>
            <div className="lang">
                <img width="40" height="40" src="\assets\header\language-50.png" alt="online-support" />
            </div>
            <div className="option">
                |||
            </div>
        </header>
    )
}