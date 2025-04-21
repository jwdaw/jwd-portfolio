import "./css/Project.css";
import "../pages/css/Projects.css";
import { Button } from "react-bootstrap";

function Project(props) {
  // Handle edit button click
  const handleEdit = () => {
    props.onEdit(props._id);
  };

  // Handle delete button click
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${props.name}"?`)) {
      props.onDelete(props._id);
    }
  };

  const imageSrc = props.image;

  return (
    <>
      <div className="props-content" key={props._id}>
        <h2>Project Title: {props.name}</h2>
        {imageSrc && (
          <div className="props-image-container">
            <img src={imageSrc} alt={`${props.name} screenshot`} />
          </div>
        )}
        <p>
          <span className="props-label">Description:</span>
          {props.desc}
        </p>
        <p>
          <span className="props-label">Skills:</span>
          {Array.isArray(props.skills) ? props.skills.join(", ") : props.skills}
        </p>
        <p>
          <span className="props-label">Contributions:</span>
          {Array.isArray(props.contributions) && props.contributions.length > 0
            ? props.contributions.map((contributor, idx) => (
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
            : "Personal props"}
        </p>
        {props.github && (
          <p>
            <span className="props-label">Github:</span>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              Click Here!
            </a>
          </p>
        )}
        {props.devpost && (
          <p>
            <span className="props-label">DevPost:</span>
            <a href={props.devpost} target="_blank" rel="noopener noreferrer">
              Click Here!
            </a>
          </p>
        )}

        {/* Add Edit and Delete buttons */}
        <div className="project-actions mt-4">
          <Button
            variant="outline-primary"
            className="me-2"
            onClick={handleEdit}
          >
            Edit Project
          </Button>
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete Project
          </Button>
        </div>
      </div>
    </>
  );
}

export default Project;
