import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My College Page</h1>
      <p>This is the home page.</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm a student at [College Name]. I'm passionate about [Interests].</p>
    </div>
  );
}

function ProjectsPage() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://project1.com'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://project2.com'
    }
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.title}>
            <Link to={`/projects/${project.title}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectPage({ match }) {
  const projects = [
    // ... same projects data as in ProjectsPage
  ];

  const project = projects.find(p => p.title === match.params.title);

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target="_blank">View Project</a>
    </div>
  );
}

function ContactPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission (e.g., send an email)
    console.log('Email:', email);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:title" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
 
}
export default App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);