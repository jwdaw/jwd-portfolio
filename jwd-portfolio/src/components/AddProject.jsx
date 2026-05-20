import React, { useState } from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

const AddProject = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    if (event.target.files[0]) {
      setPrevSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const skillsString = formData.get("skills");
    if (skillsString) {
      const skillsArray = skillsString.split(",").map((skill) => skill.trim());
      formData.delete("skills");
      formData.append("skills", JSON.stringify(skillsArray));
    }

    const contributorName = formData.get("contributorName");
    const contributorUrl = formData.get("contributorUrl");

    if (contributorName) {
      formData.delete("contributorName");
      formData.delete("contributorUrl");
      const contributions = contributorUrl
        ? [{ name: contributorName, url: contributorUrl }]
        : [{ name: contributorName }];
      formData.append("contributions", JSON.stringify(contributions));
    }

    const projectId = crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    formData.append("_id", projectId);

    try {
      const response = await fetch(`${SERVER_URL}/api/projects`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const newProject = await response.json();
          setResult("Project added successfully");
          event.target.reset();
          setPrevSrc("");
          props.closeAddDialog();
          props.updateProjects(newProject);
        } else {
          const placeholderProject = {
            _id: projectId,
            name: formData.get("name"),
            desc: formData.get("desc"),
            skills: JSON.parse(formData.get("skills")),
            contributions: JSON.parse(formData.get("contributions")),
            image: prevSrc || "images/placeholder.png",
          };
          props.closeAddDialog();
          props.updateProjects(placeholderProject);
        }
      } else {
        setResult(`Error adding project: ${response.status}`);
      }
    } catch (error) {
      setResult(`Network error: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-dark-800 border border-dark-600 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-600">
          <h2 className="text-lg font-bold text-white">Add New Project</h2>
          <button
            onClick={props.closeAddDialog}
            className="text-gray-400 hover:text-white text-xl"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <form onSubmit={addToServer} className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Project Details
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength="3"
                  placeholder="Enter project name"
                  className="w-full px-3 py-2 bg-dark-700 border border-dark-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="desc"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="desc"
                  name="desc"
                  required
                  rows={3}
                  placeholder="Enter project description"
                  className="w-full px-3 py-2 bg-dark-700 border border-dark-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              </div>
              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Skills (comma separated)
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  required
                  placeholder="e.g. React, JavaScript, Bootstrap"
                  className="w-full px-3 py-2 bg-dark-700 border border-dark-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Contributors
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="contributorName"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Contributor Name
                </label>
                <input
                  type="text"
                  id="contributorName"
                  name="contributorName"
                  required
                  placeholder="Enter contributor name"
                  className="w-full px-3 py-2 bg-dark-700 border border-dark-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="contributorUrl"
                  className="block text-sm text-gray-400 mb-1"
                >
                  Contributor URL (optional)
                </label>
                <input
                  type="url"
                  id="contributorUrl"
                  name="contributorUrl"
                  placeholder="https://github.com/username"
                  className="w-full px-3 py-2 bg-dark-700 border border-dark-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Project Image
            </h3>
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={uploadImage}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-dark-600 file:text-gray-300 hover:file:bg-dark-500"
            />
            {prevSrc && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400 mb-2">Preview:</p>
                <img
                  src={prevSrc}
                  alt="Preview"
                  className="max-h-40 rounded-md mx-auto"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-dark-600">
            <button
              type="button"
              onClick={props.closeAddDialog}
              className="px-4 py-2 bg-dark-600 text-gray-300 hover:text-white rounded-md transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-md transition-colors text-sm font-medium"
            >
              Add Project
            </button>
          </div>

          {result && (
            <p className="text-center text-sm text-accent-light mt-3">
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProject;
