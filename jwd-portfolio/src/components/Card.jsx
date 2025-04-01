function Card(props) {
  return (
    <>
      <section className={props.className}>
        <h2>{props.title}</h2>
        {props.image && <img src={props.image} alt={props.imageAlt || ""} />}
        {props.content}
      </section>
    </>
  );
}

export default Card;
