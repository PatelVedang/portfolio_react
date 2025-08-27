import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="container">
        <h1 className="hero__title"></h1>
        <p className="hero__subtitle"></p>
        <div className="hero__actions">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn btn--secondary" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
