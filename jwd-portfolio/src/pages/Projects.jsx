import { useState, useEffect } from "react";
import axios from "axios";
import Project from "../components/Project";
import AddProject from "../components/AddProject";
import EditProject from "../components/EditProject";

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
      console.error("Error fetching projects:", err);
      const fallbackProjects = [
        {
          _id: "8f298c04-00ed-42bc-b8f7-eaf3ec6ce5df",
          name: "DaVinci Academia",
          image: `${process.env.PUBLIC_URL}/images/Davinci.png`,
          desc: "DaVinci Academia is a recreation of a University Course and Major review system...",
          skills: ["Java", "JSON", "Unit Testing", "Git", "Scrum"],
          contributions: [{ name: "Team Project" }],
        },
      ];
      setProjects(fallbackProjects);
      setActiveProject("0");
      setLoading(false);
      setError("Using fallback project data - couldn't connect to server");
    }
  };

  const handleSelect = (index) => {
    setActiveProject(index.toString());
  };

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const updateProjects = (project) => {
    setProjects((current) => [...current, project]);
  };

  const handleEditProject = (projectId) => {
    const project = projects.find((p) => p._id === projectId);
    if (project) {
      setProjectToEdit(project);
      setShowEditDialog(true);
    }
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
    setProjectToEdit(null);
  };

  const updateProject = (updatedProject) => {
    setProjects((current) =>
      current.map((p) => (p._id === updatedProject._id ? updatedProject : p)),
    );
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`${SERVER_URL}/api/projects/${projectId}`, {
        headers: { "Content-Type": "application/json" },
      });
      setProjects((current) => current.filter((p) => p._id !== projectId));
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

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center text-gray-400">
        Loading projects...
      </div>
    );
  }

  if (error && projects.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center text-gray-400">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Projects
      </h1>

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

      {/* Project tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {projects.map((project, index) => (
          <button
            key={`${project._id}-${index}`}
            onClick={() => handleSelect(index)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeProject === index.toString()
                ? "bg-white text-white"
                : "bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white border border-dark-600"
            }`}
          >
            {project.name}
          </button>
        ))}
        <button
          onClick={openAddDialog}
          className="px-4 py-2 rounded-md text-sm font-medium bg-dark-700 border border-dashed border-dark-500 text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
          title="Add new project"
        >
          + Add
        </button>
      </div>

      {error && <p className="text-gray-400 text-sm mb-4">{error}</p>}

      {/* Active project */}
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
          ),
      )}
    </div>
  );
}

export default Projects;
