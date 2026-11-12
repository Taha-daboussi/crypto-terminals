const TipBox = ({ text }) => {
  return (
    <section className="card text-bg-primary text-center mb-4">
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </section>
  );
};

export default TipBox;
