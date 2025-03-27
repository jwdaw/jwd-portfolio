import "./css/Home.css";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <section id="intro-header">
        <h3>
          Welcome to my professional, educational, and personal work portfolio.
          Displayed on these pages are projects I have spent time creating and
          the skils I have gained in that process.
        </h3>
      </section>
      <section id="flex-home">
        <Card />
        <Card />
      </section>
    </>
  );
}

export default Home;
