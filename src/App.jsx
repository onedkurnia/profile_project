import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Personal Profile</h1>
        <p className="tagline">Welcome to my profile page</p>
      </header>

      <main className="main-content">
        <section className="section about">
          <h2>About Me</h2>
          <p>
            This is a modern frontend profile project built with React and Vite.
            Customize this section to tell your story.
          </p>
        </section>

        <section className="section skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend Development</h3>
              <p>React, JavaScript, HTML, CSS</p>
            </div>
            <div className="skill-card">
              <h3>Tools & Technologies</h3>
              <p>Vite, Git, npm</p>
            </div>
            <div className="skill-card">
              <h3>Design</h3>
              <p>UI/UX, Responsive Design</p>
            </div>
          </div>
        </section>

        <section className="section projects">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>Profile Project</h3>
            <p>A modern personal profile website built with React and Vite</p>
          </div>
        </section>

        <section className="section contact">
          <h2>Contact</h2>
          <p>Get in touch to discuss opportunities or collaborations.</p>
          <div className="contact-links">
            <a href="mailto:contact@example.com" className="contact-button">Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-button">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-button">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Personal Profile. Built with React + Vite.</p>
      </footer>
    </div>
  )
}

export default App
