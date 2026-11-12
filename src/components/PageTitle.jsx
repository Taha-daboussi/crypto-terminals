const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-4">
      <h1>{title}</h1>
      <p className="text-secondary">{subtitle}</p>
    </div>
  );
};

export default PageTitle;
