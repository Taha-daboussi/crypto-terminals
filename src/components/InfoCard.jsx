const InfoCard = ({ title, text }) => {
  return (
    <section className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </section>
  );
};

export default InfoCard;
