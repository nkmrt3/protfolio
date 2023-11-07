// src/App.js
import React from 'react';
import './App.css';
import profilePicture from './assets/profile.webp';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <img
          src={profilePicture}
          alt="Nitin Kumar"
          className="profile-image"
        />
        <h1>Nitin Kumar</h1>
        <p>Welcome to my portfolio website!</p>
        <a
          href="/nitin_kumar_resume.pdf"
          download
        >
          Download Resume
        </a>
        <div className="social-icons">
          <a href="https://github.com/yourusername">
            <img src={process.env.PUBLIC_URL + '/assets/github-icon.png'} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/yourusername">
            <img src={process.env.PUBLIC_URL + '/assets/linkedin-icon.png'} alt="LinkedIn" />
          </a>
          {/* Add more icons as needed */}
        </div>
      </header>

      <section id="about" className="section">
        {/* Add content for the About section */}
      </section>

      <section id="portfolio" className="section">
        {/* Add content for the Portfolio section */}
      </section>

      <section id="contact" className="section">
        {/* Add content for the Contact section */}
      </section>
    </div>
  );
}

export default App;

