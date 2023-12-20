import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useTypingEffect from '../pages/components/typing'
import '../styles/HomePage.css'
import grace from '../images/ny-grace.jpg'
import memoji from '../images/grace-memoji.png'
import github from '../images/github.png'
import linkedIn from '../images/linkedin.png'

export default function HomePage() {
    const navigate = useNavigate();
    const greeting = useTypingEffect("Hello, I'm Grace Park", 150);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      // Add the event listener
      window.addEventListener('scroll', onScroll);
  
      // Remove the event listener on cleanup
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    return (
        <div className="app">
            <nav className="navbar">
                {/* Logo and navigation items */}
                <a className="logo" href='/'><img src={memoji} alt='grace-icon'/></a>
                <div className="nav-items">
                    <a href="/grace">Home</a>
                    <a href="/about">About</a>
                    <a href="/experiences">Experience</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
            
            <header className="header">
                <div className='text-container'>
                    <h1>{greeting}</h1>
                    {/* This will slide in from the left when the page is scrolled */}
                    <div className={`introduction ${isScrolled ? 'slide-in-left' : ''}`}>
                        <p>
                            Honors CS Student at Michigan State University
                        </p>
                        <div className="social-icons">
                            <a className="logo" href="https://www.linkedin.com/in/eunhye-park-93a299223/"><img src={github} alt="linkedin-icon"/></a>
                            <a className="logo" href="https://github.com/graceunhye1024"><img src={linkedIn} alt="github-icon"/></a>
                        </div>
                    </div>
                </div>
                <div className="image-container slide-in-right">
                    <img className='grace-ny' src={grace} alt="Grace Park" />
                </div>
            </header>
        </div>
    );
}
