import "./css/About.css";
import ListGroup from "react-bootstrap/ListGroup";

function About() {
  return (
    <section>
      <section className="profile">
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
          alt="Jackson Dawson profile"
        />
        <ListGroup>
          <ListGroup.Item>Name: Jackson Dawson</ListGroup.Item>
          <ListGroup.Item>Major: Computer Information Systems</ListGroup.Item>
          <ListGroup.Item>Anticipated Graduation: May 2026</ListGroup.Item>
          <ListGroup.Item>Hometown: Fort Mill, SC</ListGroup.Item>
          <ListGroup.Item>Favorite Color: Blue</ListGroup.Item>
        </ListGroup>
      </section>
      <section className="contents">
        <h2>Skills</h2>
        <p>
          Languages: Java, C++, Javascript, HTML, CSS,
          <br />
          Software Applications: React, Bootstrap, Microsoft Suite, Google
          Suite, Git, SCRUM, Unit Testing, Design Patterns, JSON
          <br />
          Operating Systems: Windows Professional Version, Linux/Unix
        </p>
        <h2>Hobbies</h2>
        <p>
          A few things I enjoy doing out of the classroom include running,
          mountain biking, tennis, and hanging out with friends! I spent eight
          years running competitively, two of which were as a collegiete
          athlete, and now I'm currently marathon training!
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/images/banner.jpg`}
          alt="Banner showing outdoor activities"
        />
      </section>
    </section>
  );
}

export default About;
