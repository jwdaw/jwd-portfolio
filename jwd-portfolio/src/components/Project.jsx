function Project(props) {
  const handleEdit = () => {
    props.onEdit(props._id);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${props.name}"?`)) {
      props.onDelete(props._id);
    }
  };

  return (
    <div className="bg-dark-700 border border-dark-600 rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">{props.name}</h2>

      {props.image && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src={props.image}
            alt={`${props.name} screenshot`}
            className="w-full max-h-96 object-cover"
          />
        </div>
      )}

      <div className="space-y-3 text-gray-300">
        <p>
          <span className="font-semibold text-gray-100">Description: </span>
          {props.desc}
        </p>
        <p>
          <span className="font-semibold text-gray-100">Skills: </span>
          {Array.isArray(props.skills) ? props.skills.join(", ") : props.skills}
        </p>
        <p>
          <span className="font-semibold text-gray-100">Contributions: </span>
          {Array.isArray(props.contributions) && props.contributions.length > 0
            ? props.contributions.map((contributor, idx) => (
                <span key={idx}>
                  {idx > 0 && ", "}
                  <a
                    href={contributor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-light hover:text-accent underline"
                  >
                    {contributor.name}
                  </a>
                </span>
              ))
            : "Personal Project"}
        </p>
        {props.github && (
          <p>
            <span className="font-semibold text-gray-100">GitHub: </span>
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent underline"
            >
              View Repository
            </a>
          </p>
        )}
        {props.devpost && (
          <p>
            <span className="font-semibold text-gray-100">DevPost: </span>
            <a
              href={props.devpost}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent underline"
            >
              View on DevPost
            </a>
          </p>
        )}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleEdit}
          className="px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-md transition-colors text-sm font-medium"
        >
          Edit Project
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md transition-colors text-sm font-medium"
        >
          Delete Project
        </button>
      </div>
    </div>
  );
}

export default Project;
