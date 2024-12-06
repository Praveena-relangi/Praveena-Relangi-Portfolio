import React from 'react';
import Navbar from './Navbar';
import Experience from './assets/experience.png';
import Education from './assets/education.jpg';

import './Portfolio.css';

function Section({ title, items, image, alt }) {
  return (
    <div className="section-container">
      <div className="image-container">
        <img src={image} className="section-img" alt={alt} />
      </div>
      <div className="section-content">
        <h1>{title}</h1>
        {items.map((item, index) => (
          <div key={index}>
            <h3>{item.role}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Portfolio() {
  const experienceItems = [
    {
      role: 'Application Developer',
      description: 'IBM India Pvt Ltd (Sep 2023 - Jul 2024)',
    },
    {
      role: 'Software Engineer',
      description: 'Carelon Global Solutions (Jul 2021 - Aug 2023)',
    },
  ];

  const educationItems = [
    {
      role: 'Bachelor of Technology',
      description:
        'Electronics and Communication Engineering from Bonam Venkata Chalamayya Institute of Technology and Science (Jul 2017 - Jul 2021)',
    },
    {
      role: 'Class XII',
      description:
        'Mathematics, Physics, and Chemistry stream from Sri Chaitanya Junior College (Jun 2015 - Apr 2017)',
    },
    {
      role: 'Class X',
      description:
        'Secondary School Education from Sri Chaitanya Techno School (Jun 2014 - Apr 2015)',
    },
  ];

  return (
    <div className="portfolio-page">
      <Navbar />
      <div className="portfolio-container">
        <Section
          title="Work Experience"
          items={experienceItems}
          image={Experience}
          alt="Work Experience"
        />
        <Section
          title="Education"
          items={educationItems}
          image={Education}
          alt="Education"
        />
      </div>
    </div>
  );
}

export default Portfolio;
