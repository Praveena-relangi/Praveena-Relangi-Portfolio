import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';

function AboutMe() {
  const navigate = useNavigate();  

  const handlePortfolioClick = () => {
    navigate('/Portfolio'); // Navigate to the Portfolio page
  };

  return (
    <div className="about-me-container">
      <h1 className="about-me-heading">About me</h1>
      <p className="about-me-description">
        I am Praveena Relangi, a dedicated Software Engineer from India with 3 years of professional experience. 
        As an Electronics and Communication Engineering graduate, I have a strong foundation in problem-solving 
        and analytical thinking. My journey in technology has been marked by curiosity and a passion for continuous learning. 
        I enjoy exploring innovative solutions and tackling challenges, whether working on legacy systems or building 
        modern web applications. Outside of work, I am always eager to learn new technologies and expand my expertise, 
        driven by a desire to make meaningful contributions to the ever-evolving tech landscape.
      </p>
      <div className="divider"></div>
      <button className="Portfolio-btn" onClick={handlePortfolioClick}>
        Portfolio
      </button>
        <a className='Resume-btn'
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}

export default AboutMe;
