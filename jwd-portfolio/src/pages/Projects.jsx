import "./css/Projects.css";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import Project from "../components/Project";
import AddProject from "../components/AddProject";
import EditProject from "../components/EditProject";

//"https://portfolio-server-3k7u.onrender.com"

const SERVER_URL = "https://portfolio-server-3k7u.onrender.com";

function Projects() {
  const [activeProject, setActiveProject] = useState("0");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/projects`);
      setProjects(response.data);
      if (response.data.length > 0) {
        setActiveProject("0");
      }
      setLoading(false);
    } catch (err) {
      // If there's an error, try to use a fallback with hard-coded projects
      console.error("Error fetching projects:", err);

      // Fallback to hard-coded projects if needed
      const fallbackProjects = [
        {
          _id: "8f298c04-00ed-42bc-b8f7-eaf3ec6ce5df",
          name: "DaVinci Academia",
          image: `${process.env.PUBLIC_URL}/images/Davinci.png`,
          desc: "DaVinci Academia is a recreation of a University Course and Major review system...",
          skills: ["Java", "JSON", "Unit Testing", "Git", "Scrum"],
          contributions: [{ name: "Team Project" }],
        },
        // Add other fallback projects similar to what's in your server.js
      ];

      setProjects(fallbackProjects);
      setActiveProject("0");
      setLoading(false);
      setError("Using fallback project data - couldn't connect to server");
    }
  };

  const handleSelect = (eventKey) => {
    setActiveProject(eventKey);
  };

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  const updateProjects = (project) => {
    setProjects((currentProjects) => [...currentProjects, project]);
  };

  const handleEditProject = (projectId) => {
    const projectToEdit = projects.find((project) => project._id === projectId);
    if (projectToEdit) {
      setProjectToEdit(projectToEdit);
      setShowEditDialog(true);
    }
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
    setProjectToEdit(null);
  };

  const updateProject = (updatedProject) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project._id === updatedProject._id ? updatedProject : project
      )
    );
  };

  // Delete project handler
  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`${SERVER_URL}/api/projects/${projectId}`, {
        headers: { "Content-Type": "application/json" },
      });

      // Remove from state
      setProjects((currentProjects) =>
        currentProjects.filter((project) => project._id !== projectId)
      );

      // If the active project was deleted, select the first project
      if (
        projects.length > 0 &&
        projects[parseInt(activeProject)]._id === projectId
      ) {
        setActiveProject("0");
      }
    } catch (err) {
      console.error("Error deleting project:", err);
      alert("Failed to delete project. Please try again.");
    }
  };

  if (loading)
    return <div className="projects-container">Loading projects...</div>;
  if (error) return <div className="projects-container">Error: {error}</div>;
  if (projects.length === 0)
    return (
      <div className="projects-container">
        <p>No projects found.</p>
        <button
          className="add-project-button"
          onClick={openAddDialog}
          title="Add new project"
        >
          +
        </button>
        {showAddDialog && (
          <AddProject
            closeAddDialog={closeAddDialog}
            updateProjects={updateProjects}
          />
        )}
      </div>
    );

  return (
    <div className="projects-container">
      {showAddDialog && (
        <AddProject
          closeAddDialog={closeAddDialog}
          updateProjects={updateProjects}
        />
      )}

      {showEditDialog && projectToEdit && (
        <EditProject
          project={projectToEdit}
          closeEditDialog={closeEditDialog}
          updateProject={updateProject}
        />
      )}

      <div className="project-nav">
        <div className="nav-header">
          <Nav
            variant="pills"
            activeKey={activeProject}
            onSelect={handleSelect}
          >
            {projects.map((project, index) => (
              <Nav.Item key={`${project._id}-${index}`}>
                <Nav.Link eventKey={index.toString()}>{project.name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <button
            className="add-project-button"
            onClick={openAddDialog}
            title="Add new project"
          >
            +
          </button>
        </div>
      </div>

      {projects.map(
        (project, index) =>
          activeProject === index.toString() && (
            <Project
              key={project._id}
              _id={project._id}
              name={project.name}
              image={project.image}
              desc={project.desc}
              skills={project.skills}
              contributions={project.contributions}
              github={project.github}
              devpost={project.devpost}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
            />
          )
      )}
    </div>
  );
}

export default Projects;
