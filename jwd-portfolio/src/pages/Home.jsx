import "./css/Home.css";
import Card from "../components/Card";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <section id="intro-header">
        <h3>
          Welcome to my professional, educational, and personal portfolio.
          Displayed on these pages are the projects, events, and organizations I
          have been involved with and the skills I have learned and acquired in
          that process.
        </h3>
      </section>
      <section id="flex-home">
        <Card
          title="Recent Work"
          content={
            <Carousel className="img-slideshow">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/images/Hackathon.jpg`}
                  alt="Slide 1"
                />
                <Carousel.Caption>
                  <h3>CUHackit 2025</h3>
                  <p>
                    Me and some friends won a Hackathon! We created a smart
                    mailbox attachment
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/images/SpringBreak.jpg`}
                  alt="Slide 1"
                />
                <Carousel.Caption>
                  <h3>Spring Break Retreat</h3>
                  <p>
                    I got to co-lead a group of students on a Spring Break trip
                    for an on-campus student ministry!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/images/Microphone.webp`}
                  alt="Slide 1"
                />
                <Carousel.Caption>
                  <h3>AI Transcription App</h3>
                  <p>
                    I'm actively working on a personal side project that uses
                    live transcription and AI to take notes
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          }
          className="main-cards"
        />
        <Card
          title="News"
          content=<ul>
            <li>
              Currently I am studying courses related to Data Structures and
              Algorithms, Web Development, and Networking!{" "}
            </li>
            <li>
              Some projects I am actively working on include this personal
              portfolio, a chatbot utilizing OpenAI's API, and a sycnronzied
              timer for coaches(Cross Country and Track and Field) to manage
              their athletes timing and performances across devices.
            </li>
            <li>
              Some things I hope on learning soon include familiarity with web
              application frameworks, a deeper understanding of machine learning
              models/neural networks, and a better grasp of the programming
              langauge Python!
            </li>
            <li>
              I recently competed in a team of 3 at Clemson Universities 2025
              Hackathon! We created a smart mailbox attachment that won two of
              the hackathon categories.
            </li>
          </ul>
          className="main-cards"
        />
      </section>
    </>
  );
}

export default Home;
