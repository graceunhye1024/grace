import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useTypingEffect from '../pages/components/typing'
import '../styles/HomePage.css'
import grace from '../images/ny-grace.jpg'
import memoji from '../images/grace-memoji.png'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'

const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };  

export default function HomePage() {
    const navigate = useNavigate();
    const greeting = useTypingEffect("Hi, I'm Grace Park", 100);
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
            <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
                {/* Logo and navigation items */}
                <a className="logo" href='/grace'><img src={memoji} alt='grace-icon'/></a>
                <div className="nav-items">
                    <a href="/grace">Home</a>
                    <a href="#about" onClick={handleNavLinkClick}>About</a>
                    <a href="#experience" onClick={handleNavLinkClick}>Experience</a>
                    <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
                </div>

            </nav>
            
            <div className="header">
                <div className='text-container'>
                    <h1>{greeting}</h1>
                    {/* This will slide in from the left when the page is scrolled */}
                    <div className={`introduction ${isScrolled ? 'slide-in-left' : ''}`}>
                        <p>
                            Honors CS Student at Michigan State University
                        </p>
                    </div>
                </div>
                <div className="image-container slide-in-right">
                    <img className='grace-ny' src={grace} alt="Grace Park" />
                </div>
            </div>
            <About/>
            <Experience/>
            <Contact/>
        </div>
    );
}
