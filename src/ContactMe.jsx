import React from 'react';
import Navbar from './Navbar';
import Location from './assets/location.png';
import Phone from './assets/call.png';
import Mail from './assets/email.png';
import Linkedin from './assets/linkedin.png';
import Git from './assets/github-icon.png';
import Credly from './assets/credly.png';
import './ContactMe.css';

const ContactMe = () => {
  const contactDetails = [
    { name: 'Location', info: 'Hyderabad, India', icon: Location},
    { name: 'Phone Number', info: '+91-8897224920', icon: Phone},
    { name: 'Email', info: 'relangipraveena99@gmail.com', icon: Mail},
    { name: 'LinkedIn', info: 'linkedin.com/in/praveena-relangi-085383196/', icon: Linkedin},
    { name: 'GitHub', info: 'github.com/Praveena-relangi', icon: Git},
    { name: 'Credly', info: 'credly.com/users/praveena-relangi', icon: Credly},
  ];

  return (
    <div className="contactme-page">
      <Navbar />
      <div className="contact-container">
        {contactDetails.map((contact, index) => (
          <div className="contact-card" key={index}>
            <img src={contact.icon} alt={contact.name} className="contact-icon" />
            <div className="contact-info">
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-detail">{contact.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
