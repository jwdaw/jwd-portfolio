import "./css/Projects.css";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import Project from "../components/Project";

function Projects() {
  const [activeProject, setActiveProject] = useState("0");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Add http:// to the URL
        const response = await axios.get(
          "https://portfolio-server-3k7u.onrender.com/api/projects"
        );
        setProjects(response.data);
        if (response.data.length > 0) {
          setActiveProject("0"); // Set first project as active
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects data");
        setLoading(false);
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  const handleSelect = (eventKey) => {
    setActiveProject(eventKey);
  };

  if (loading)
    return <div className="projects-container">Loading projects...</div>;
  if (error) return <div className="projects-container">Error: {error}</div>;
  if (projects.length === 0)
    return <div className="projects-container">No projects found.</div>;

  return (
    <div className="projects-container">
      <div className="project-nav">
        <Nav variant="pills" activeKey={activeProject} onSelect={handleSelect}>
          {projects.map((project, index) => (
            <Nav.Item key={project._id}>
              <Nav.Link eventKey={index.toString()}>{project.name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>

      {projects.map(
        (project, index) =>
          activeProject === index.toString() && (
            <Project
              _id={project._id}
              name={project.name}
              image={project.image}
              desc={project.desc}
              skills={project.skills}
              contributions={project.contributions}
              github={project.github}
              devpost={project.devpost}
            />
          )
      )}
    </div>
  );
}

export default Projects;
