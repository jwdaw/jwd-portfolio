import "./css/AddProject.css";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

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
      console.log("Form data file:", formData.get("img"));

      const response = await fetch(
        "https://portfolio-server-3k7u.onrender.com/api/projects",
        {
          method: "POST",
          body: formData,
        }
      );

      const contentType = response.headers.get("content-type");
      if (response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const newProject = await response.json();
          setResult("Project added successfully");
          event.target.reset();
          setPrevSrc("");
          props.closeAddDialog();
          props.updateProjects(newProject);
        } else {
          const text = await response.text();
          setResult("Success, but received non-JSON response");
          console.log("Server returned non-JSON:", text);
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
        console.error("Response status:", response.status);
        console.error("Response type:", contentType);
        const errorText = await response.text();
        setResult(`Error adding project: ${response.status}`);
        console.error("Server response:", errorText);
      }
    } catch (error) {
      setResult(`Network error: ${error.message}`);
      console.error("Network error:", error);
    }
  };

  return (
    <Modal
      show={true}
      onHide={props.closeAddDialog}
      centered
      backdrop="static"
      size="lg"
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "maroon", color: "white" }}
      >
        <Modal.Title>Add New Project</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-project-form">
        <Form onSubmit={addToServer}>
          <div className="form-section">
            <h5 className="section-header">Project Details</h5>
            <Form.Group className="mb-4">
              <Form.Label className="form-label">Project Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                required
                minLength="3"
                placeholder="Enter project name"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="form-label">Description</Form.Label>
              <Form.Control
                as="textarea"
                id="desc"
                name="desc"
                required
                rows={3}
                placeholder="Enter project description"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="form-label">
                Skills (comma separated)
              </Form.Label>
              <Form.Control
                type="text"
                id="skills"
                name="skills"
                required
                placeholder="e.g. React, JavaScript, Bootstrap"
              />
            </Form.Group>
          </div>

          <div className="form-section">
            <h5 className="section-header">Contributors</h5>
            <Form.Group className="mb-4">
              <Form.Label className="form-label">Contributor Name</Form.Label>
              <Form.Control
                type="text"
                id="contributorName"
                name="contributorName"
                required
                placeholder="Enter contributor name"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="form-label">
                Contributor URL (optional)
              </Form.Label>
              <Form.Control
                type="url"
                id="contributorUrl"
                name="contributorUrl"
                placeholder="https://github.com/username"
              />
            </Form.Group>
          </div>

          <div className="form-section">
            <h5 className="section-header">Project Image</h5>
            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label className="form-label">Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="img"
                accept="image/*"
                onChange={uploadImage}
              />
            </Form.Group>

            {prevSrc && (
              <div className="text-center mb-4">
                <h6>Preview:</h6>
                <img src={prevSrc} alt="Preview" className="img-preview" />
              </div>
            )}
          </div>

          <div className="text-center mt-5">
            <Button
              variant="secondary"
              className="me-2"
              onClick={props.closeAddDialog}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              type="submit"
              style={{ backgroundColor: "maroon" }}
            >
              Add Project
            </Button>
          </div>

          {result && <div className="text-center mt-3 text-info">{result}</div>}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProject;
