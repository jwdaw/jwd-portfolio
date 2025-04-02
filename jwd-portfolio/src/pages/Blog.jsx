import "./css/Blog.css";
import Card from "../components/Card";

function Blog() {
  return (
    <div className="blog-container">
      <h1>My Blog</h1>
      {/* For the Hackathon card, we'll use a different approach */}
      <section className="card-section">
        <h2>CU Hackathon 2025 - 03/09/2025</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EgFc_VZ-eq8?si=VSPizkrebWtmsmr9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="blog-video"
          ></iframe>
        </div>
        <p>
          I'm excited to have been able to participate in this year's Clemson
          University 2025 Hackathon! I teamed up with a group of friends to
          build a smart mailbox attachment. We won best use of AWS and best
          hardware hack!
        </p>
      </section>

      {/* Use the Card component for standard image posts */}
      <Card
        title="Capstone Project Update Coming Soon! - 01/20/2025"
        image={`${process.env.PUBLIC_URL}/images/capstone.png`}
        imageAlt="Portfolio website screenshot"
        content={
          <p>
            Capstone Project will be coming up soon and I'm excited to begin
            working with a group on a real world project that will not only be a
            portfolio piece but also be a great space to learn and push myself
            to develop better software!
          </p>
        }
      />
    </div>
  );
}

export default Blog;
