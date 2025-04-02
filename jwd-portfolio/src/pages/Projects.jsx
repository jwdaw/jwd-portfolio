import "./css/Projects.css";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState("link-0");

  const handleSelect = (eventKey) => {
    setActiveProject(eventKey);
  };

  return (
    <div className="projects-container">
      <div className="project-nav">
        <Nav variant="pills" activeKey={activeProject} onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="link-0">JWD Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">PostOne</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Davinci Academia</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Live Transcription App</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {activeProject === "link-0" && (
        <div className="project-content">
          <h2>Project Title: JWD Portfolio</h2>
          <div className="project-image-container">
            <img
              src={`${process.env.PUBLIC_URL}/images/JWDPortfolio.png`}
              alt="JWD Portfolio screenshot"
            />
          </div>
          <p>
            <span className="project-label">Description:</span>
            This is my personal portfolio website (This Website) built using
            React and Bootstrap. It is my cumulative project for my Web
            Applications class in which it started as a static HTML website and
            was built from the ground up into a fully fledged Web Application.
          </p>
          <p>
            <span className="project-label">Skills:</span>
            React, JavaScript, HTML, CSS, Bootstrap, Responsive Design
          </p>
          <p>
            <span className="project-label">Contributions:</span>
            Personal project
          </p>
          <p>
            <span className="project-label">Github:</span>
            <a href="https://github.com/jwdaw/jwd-portfolio">Click Here!</a>
          </p>
        </div>
      )}

      {activeProject === "link-2" && (
        <div className="project-content">
          <h2>Project Title: Davinci Academia</h2>
          <div className="project-image-container">
            <img
              src={`${process.env.PUBLIC_URL}/images/Davinci.png`}
              alt="Davinci Academia screenshot"
            />
          </div>
          <p>
            <span className="project-label">Description:</span>
            DaVinci Academia is a recreation of a University Course and Major
            review system. The project was created as a mock full-stack software
            development life cycle, in which we covered topics such as
            Requirements elicitation, UML design, Scrum management, Backend
            development, Database development, Frontend development, and more.
          </p>
          <p>
            <span className="project-label">Skills:</span>
            Java, JSON, Unit Testing, Git, Scrum, UML Design, Backend
            development, Database development, Frontend development
          </p>
          <p>
            <span className="project-label">Contributions:</span>
            Anthony Goldhammer, Oliver Meihls, Spencer Philips
          </p>
          <p>
            <span className="project-label">Github:</span>
            <a href="https://github.com/olliekod/davinciFX">Click Here!</a>
          </p>
        </div>
      )}

      {/* Add other project content sections as needed */}
      {activeProject === "link-1" && (
        <div className="project-content">
          <h2>Project Title: PostOne</h2>
          <div className="project-image-container">
            <img
              src={`${process.env.PUBLIC_URL}/images/PostOne.GIF`}
              alt="PostOne"
            />
          </div>
          <p>
            <span className="project-label">Description:</span>PostOne is a
            Smart Mailbox attachment created at 2025 CUHackit Hackathon. When
            the mailbox door opens, an image is taken of the person who opened
            it, and an email is sent to a user that their mailbox has been
            opened, as well as whether or not the person who opened it is a
            recognized user.
          </p>
          <p>
            <span className="project-label">Skills:</span>
            Python, Amazon Web Services (AWS) - Lambda Functions, S3 Buckets,
            Rekognize Facial Recognition, and Simple Email Service
          </p>
          <p>
            <span className="project-label">Contributions:</span>
            Brian Wisniewski and Evan Zovkic
          </p>
          <p>
            <span className="project-label">Github:</span>
            <a href="https://github.com/jwdaw/PostOne">Click Here!</a>
          </p>
          <p>
            <span className="project-label">DevPost:</span>
            <a href="https://devpost.com/software/postone">Click Here!</a>
          </p>
        </div>
      )}

      {activeProject === "link-3" && (
        <div className="project-content">
          <h2>Project Title: Live Transcription App</h2>
          <p>
            <span className="project-label">Description:</span>
            In Progress! Coming Soon!
          </p>
        </div>
      )}
    </div>
  );
}

export default Projects;
