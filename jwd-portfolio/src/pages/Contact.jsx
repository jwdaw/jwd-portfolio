import "./css/Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            <Form.Text className="text-muted">
              Your email will not be shared with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formTextArea">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
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
