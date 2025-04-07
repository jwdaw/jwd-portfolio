import "./css/Projects.css";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import axios from "axios";

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
            <div className="project-content" key={project._id}>
              <h2>Project Title: {project.name}</h2>
              {project.image && (
                <div className="project-image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/${project.image}`}
                    alt={`${project.name} screenshot`}
                  />
                </div>
              )}
              <p>
                <span className="project-label">Description:</span>
                {project.desc}
              </p>
              <p>
                <span className="project-label">Skills:</span>
                {Array.isArray(project.skills)
                  ? project.skills.join(", ")
                  : project.skills}
              </p>
              <p>
                <span className="project-label">Contributions:</span>
                {Array.isArray(project.contributions) &&
                project.contributions.length > 0
                  ? project.contributions.map((contributor, idx) => (
                      <span key={idx}>
                        {idx > 0 && ", "}
                        <a
                          href={contributor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contributor.name}
                        </a>
                      </span>
                    ))
                  : "Personal project"}
              </p>
              {project.github && (
                <p>
                  <span className="project-label">Github:</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here!
                  </a>
                </p>
              )}
              {project.devpost && (
                <p>
                  <span className="project-label">DevPost:</span>
                  <a
                    href={project.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here!
                  </a>
                </p>
              )}
            </div>
          )
      )}
    </div>
  );
}

export default Projects;
