import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact__links">
          <span className="pill">Phone: +91 8140235816</span>
          <span className="pill">Email: patelvedang073@gmail.com</span>
        </div>

        <h3 style={{marginTop: '1rem'}}>Other Links</h3>
        <div className="contact__links">
          <a href="https://github.com/PatelVedang" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/patelvedang_/" target="_blank" rel="noopener noreferrer">LeetCode</a>
          <a href="https://www.linkedin.com/in/vedang-patel-a107342b6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
