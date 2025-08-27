import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <div className="grid two-col">
          <div className="about__image" style={{backgroundImage: "url('/profile.jpg')"}}></div>
          <div className="about__content">
            <p>Hi, I'm Vedang Patel, a Computer Engineering student passionate about technology and problem-solving.</p>
            <p>I love working with Python, Flask, and Machine Learning, and I enjoy building projects that blend data analytics and web development.</p>
            <p>I have hands-on experience with React, MongoDB, and APIs, which helps me create full-stack applications.</p>
            <p>Curiosity drives me to explore new tools and frameworks while improving my coding skills. I'm always excited to collaborate, learn, and contribute to meaningful projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
