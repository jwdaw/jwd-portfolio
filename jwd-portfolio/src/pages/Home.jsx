import "./css/Home.css";
import Tree from "../components/Tree";

function Home() {
  return (
    <>
      <section className="columns">
        <Tree
          name="Live Oak"
          description="Doesnt lose it's leaves"
          image="images/LiveOak.jpeg"
        />
        <Tree
          name="DogWood"
          description="Flowers in Spring"
          image="images/DogWood.jpg"
        />
      </section>
    </>
  );
}

export default Home;
