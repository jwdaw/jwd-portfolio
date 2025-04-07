import { useState } from "react";
import "./css/CForm.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e5732dad-8da5-44d0-a69a-0f51c93f03c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={onSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            required
          />
          <label htmlFor="name" className="form-label">
            Name
          </label>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            id="message"
            className="form-control"
            required
          ></textarea>
          <label htmlFor="message" className="form-label">
            Message
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Form
        </button>
      </form>
      <span className="form-result">{result}</span>
    </div>
  );
}
