import React from 'react'

import './style.css'

export default function index() {
    return (
        <footer className='container'>
            <nav className={'link-group1'}>
                <h3>Company</h3>
                <a to={""}>About Us</a>
                <a to={""}>Our Team</a>
                <a to={""}>Careers</a>
                <a to={""}>Contact Us</a>
            </nav>
            <nav className={'link-group2'}>
                <h3>Resources</h3>
                <a to={""}>Blog</a>
                <a to={""}>FAQs</a>
                <a to={""}>Support</a>
                <a to={""}>Tutorials</a>
            </nav>
            <nav className={'link-group3'}>
                <h3>Legal</h3>
                <a to={""}>Terms of Service</a>
                <a to={""}>Privacy Policy</a>
                <a to={""}>Cookie Policy</a>
                <a to={""}>Disclaimer</a>
            </nav>
            <nav className={'link-group4'}>
                <h3>Follow Us</h3>
                <a to={""}>Facebook</a>
                <a to={""}>Twitter</a>
                <a to={""}>Instagram</a>
                <a to={""}>LinkedIn</a>
            </nav>
            {/* <div className={'logo'}>
                <div><Logo /></div>
                <div>
                    <p>Great Match Require Great Place.</p>
                </div>
                <div></div>
            </div> */}
        </footer>
    )
}

