function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Profile section */}
      <section className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
          alt="Jackson Dawson profile"
          className="w-48 h-48 rounded-full object-cover border-8 border-dark-600"
        />
        <div className="bg-dark-700 border border-dark-600 rounded-lg p-6 w-full md:flex-1">
          <h1 className="text-2xl font-bold text-white mb-4">About Me</h1>
          <ul className="space-y-2 text-gray-300">
            <li className="flex gap-2">
              <span className="font-semibold text-gray-100">Name:</span> Jackson
              Dawson
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-gray-100">Education:</span>{" "}
              B.S. in Computer Information Systems
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-gray-100">Hometown:</span>{" "}
              Fort Mill, SC
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-dark-700 border border-dark-600 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Skills</h2>
        <div className="space-y-3 text-gray-300">
          <div>
            <span className="font-semibold text-gray-100">Languages: </span>
            <span>Java, C++, JavaScript, HTML, CSS</span>
          </div>
          <div>
            <span className="font-semibold text-gray-100">Technologies: </span>
            <span>
              React, Bootstrap, Tailwind CSS, Git, SCRUM, Unit Testing, Design
              Patterns, JSON
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-100">Tools: </span>
            <span>Microsoft Suite, Google Suite</span>
          </div>
          <div>
            <span className="font-semibold text-gray-100">
              Operating Systems:{" "}
            </span>
            <span>Windows, Linux/Unix</span>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="bg-dark-700 border border-dark-600 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Hobbies</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          A few things I enjoy doing out of the classroom include running,
          mountain biking, tennis, and hanging out with friends! I spent eight
          years running competitively, two of which were as a collegiate
          athlete, and now I'm currently marathon training!
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/images/banner.jpg`}
          alt="Banner showing outdoor activities"
          className="w-full rounded-lg object-cover max-h-64"
        />
      </section>
    </div>
  );
}

export default About;
