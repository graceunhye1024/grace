import React, { useState, useEffect } from 'react';
import '../styles/Contact.css'
import github from '../images/github.svg'
import linkedIn from '../images/linkedin.svg'
import email from '../images/email.svg'
import instagram from '../images/instagram.svg'

export default function Contact() {
    return (
        <div id="contact">
            <h2>GET IN TOUCH</h2>
            <div className="social-icons">
                <a className="logo" href="https://github.com/graceunhye1024"><img src={github} alt="github-icon"/></a>
                <a className="logo" href="https://www.linkedin.com/in/eunhye-park-93a299223/"><img src={linkedIn} alt="linkedin-icon"/></a>
                <a className="logo" href="https://instagram.com/p.grace_01"><img src={instagram} alt="instagram-icon"/></a>
                <a className="logo" href="mailto:parkeunhye1024@gmail.com"><img src={email} alt="email-icon"/></a>
            </div>
            <footer>
                © GRACE PARK 2024
            </footer>
        </div>
    );
}