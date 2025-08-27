import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">
            <div className="card__title">FitFusion — Sports Performance Tracker</div>
            <ul className="card__desc">
              <li>Personalized web app for scheduling, diet, and workouts.</li>
              <li>Model training with NumPy, Pandas, scikit-learn.</li>
              <li>Visualizations using MATLAB and scikit-learn.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card__title">REFLEX</div>
            <ul className="card__desc">
              <li>Responsive multiplayer gaming web app; UI designed in Figma.</li>
              <li>Backend built with Node.js and MongoDB.</li>
              <li>Real-time game logic, user authentication, and leaderboard.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
