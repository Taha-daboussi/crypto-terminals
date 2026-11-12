const StepCard = ({ number, title, text }) => {
  return (
    <section className="card text-center mb-4">
      <div className="card-body">
        <h2 className="text-primary">{number}</h2>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </section>
  );
};

export default StepCard;
