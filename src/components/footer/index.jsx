import React from 'react'
import Logo from '../../components/logos/footerLogo'
import './style.css'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <footer className='container'>
            <nav className={'link-group1'}>
                <h3>Company</h3>
                <Link to={""}>About Us</Link>
                <Link to={""}>Our Team</Link>
                <Link to={""}>Careers</Link>
                <Link to={""}>Contact Us</Link>
            </nav>
            <nav className={'link-group2'}>
                <h3>Resources</h3>
                <Link to={""}>Blog</Link>
                <Link to={""}>FAQs</Link>
                <Link to={""}>Support</Link>
                <Link to={""}>Tutorials</Link>
            </nav>
            <nav className={'link-group3'}>
                <h3>Legal</h3>
                <Link to={""}>Terms of Service</Link>
                <Link to={""}>Privacy Policy</Link>
                <Link to={""}>Cookie Policy</Link>
                <Link to={""}>Disclaimer</Link>
            </nav>
            <nav className={'link-group4'}>
                <h3>Follow Us</h3>
                <Link to={""}>Facebook</Link>
                <Link to={""}>Twitter</Link>
                <Link to={""}>Instagram</Link>
                <Link to={""}>LinkedIn</Link>
            </nav>
            <div className={'logo'}>
                <div><Logo /></div>
            </div>
        </footer>
    )
}

