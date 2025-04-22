import './Projects.css';

function Projects() {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 1" />
          <h3>Interactive Map</h3>
          <p>A map highlighting forgotten cities and civilizations, built with Google Earth and React.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 2" />
          <h3>VR Zoo Simulation</h3>
          <p>A virtual reality experience where users can manage a zoo with immersive features and storytelling.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project 3" />
          <h3>Accessible Web App</h3>
          <p>An app designed with accessibility in mind, focusing on inclusive UI for all users.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
