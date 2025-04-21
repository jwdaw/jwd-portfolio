import "./css/AddProject.css";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const SERVER_URL = "https://portfolio-server-3k7u.onrender.com";

const EditProject = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    if (event.target.files[0]) {
      setPrevSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  const updateProject = async (event) => {
    event.preventDefault();
    setResult("Updating...");

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

    formData.append("_id", props.project._id);

    try {
      const response = await axios({
        method: "put",
        url: `${SERVER_URL}/api/projects/${props.project._id}`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult("Project updated successfully");

      setTimeout(() => {
        props.closeEditDialog();
        props.updateProject(response.data);
      }, 1000);
    } catch (error) {
      console.error("Update error:", error);
      setResult(`Error updating project: ${error.message}`);
    }
  };

  if (!props.project) {
    return <div>Loading project data...</div>;
  }

  // Handle editing contributors
  const firstContributor =
    props.project.contributions && props.project.contributions.length > 0
      ? props.project.contributions[0]
      : { name: "", url: "" };

  return (
    <Modal
      show={true}
      onHide={props.closeEditDialog}
      centered
      backdrop="static"
      size="lg"
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "maroon", color: "white" }}
      >
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-project-form">
        <Form onSubmit={updateProject}>
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
                defaultValue={props.project.name}
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
                defaultValue={props.project.desc}
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
                defaultValue={
                  Array.isArray(props.project.skills)
                    ? props.project.skills.join(", ")
                    : ""
                }
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
                defaultValue={firstContributor.name}
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
                defaultValue={firstContributor.url || ""}
              />
            </Form.Group>
          </div>

          <div className="form-section">
            <h5 className="section-header">Project Image</h5>
            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label className="form-label">
                Upload New Image (optional)
              </Form.Label>
              <Form.Control
                type="file"
                name="img"
                accept="image/*"
                onChange={uploadImage}
              />
            </Form.Group>

            {prevSrc && (
              <div className="text-center mb-4">
                <h6>Current Image:</h6>
                <img src={prevSrc} alt="Preview" className="img-preview" />
              </div>
            )}
          </div>

          <div className="text-center mt-5">
            <Button
              variant="secondary"
              className="me-2"
              onClick={props.closeEditDialog}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              type="submit"
              style={{ backgroundColor: "maroon" }}
            >
              Update Project
            </Button>
          </div>

          {result && <div className="text-center mt-3 text-info">{result}</div>}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProject;
