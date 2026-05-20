function Card({ title, image, imageAlt, content, className }) {
  return (
    <section
      className={`bg-dark-700 border border-dark-600 rounded-lg p-6 ${className || ""}`}
    >
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      {image && (
        <img
          src={image}
          alt={imageAlt || ""}
          className="w-full rounded-md mb-4 object-cover"
        />
      )}
      <div className="text-gray-300">{content}</div>
    </section>
  );
}

export default Card;
