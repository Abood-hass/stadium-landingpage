
import { Link } from 'react-router-dom'
import Logo from '../logos/headerLogo'
import './style.css'

export default function Header() {
    return (
        <header className='header-bar-container'>
            <div className="logo">
                <Logo />
            </div>
            <nav className="links">
                <Link to={'/'}>Home</Link>
                <Link to={'/whats-up'}>Whats up?</Link>
                <Link to={'/register'}>Give it a try</Link>
                <Link to={'/contact-us'}>Contact us</Link>
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