import MyImage from "./MyImage";

const CompanyInfo = ({ logo, name, type, description, bestFor, website }) => {
  return (
    <section className="card mb-4">
      <div className="text-center mt-2">
        <MyImage src={logo} alt={name} />
      </div>
      <div className="card-body">
        <h1 className="card-title text-center">{name}</h1>
        <h5 className="text-center text-secondary">{type}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text fw-bold">Best for: {bestFor}</p>
        <p className="card-text text-primary">Website: {website}</p>
      </div>
    </section>
  );
};

export default CompanyInfo;
