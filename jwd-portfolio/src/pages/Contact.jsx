import CForm from "../components/CForm";

function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Contact Me
      </h1>

      <div className="bg-dark-700 border border-dark-600 rounded-lg p-6 mb-8">
        <CForm />
      </div>

      <div className="flex justify-center gap-4">
        <a
          href="https://www.github.com/jwdaw"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-dark-700 border border-dark-500 text-gray-300 hover:text-white hover:border-accent rounded-md transition-colors text-sm font-medium no-underline"
        >
          GitHub Profile
        </a>
        <a
          href="https://www.linkedin.com/in/jackson-dawson-0a2259266/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-dark-700 border border-dark-500 text-gray-300 hover:text-white hover:border-accent rounded-md transition-colors text-sm font-medium no-underline"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}

export default Contact;
