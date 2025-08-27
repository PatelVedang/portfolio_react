import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand__name"></span>
          <span className="brand__role"></span>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
