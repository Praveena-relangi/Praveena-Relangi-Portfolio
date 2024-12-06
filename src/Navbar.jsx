import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css'; 

function Navbar() {
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    if (path === '/KnowMore') {
      alert('Coming soon');
      return; // Prevent navigation
    }
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleNavigation('/')}>
        Praveena Relangi
      </div>
      <ul className="navbar-links">
        <li className="nav" onClick={() => handleNavigation('/Skills')}>Skills</li>
        <li className="nav" onClick={() => handleNavigation('/MyCert')}>Certifications</li>
        <li className="nav" onClick={() => handleNavigation('/ContactMe')}>Contact</li>
        <li className="nav" onClick={() => handleNavigation('/KnowMore')}>Know More</li>
      </ul>
    </nav>
  );
}

export default Navbar;
