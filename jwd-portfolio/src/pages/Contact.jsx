import "./css/Contact.css";
import CForm from "../components/CForm";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <CForm />
      </div>

      <div className="social-links">
        <a
          href="https://www.github.com/jwdaw"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
        <a
          href="https://www.linkedin.com/in/jackson-dawson-0a2259266/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}

export default Contact;
