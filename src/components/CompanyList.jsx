import CompanyCard from "./CompanyCard";

const CompanyList = ({ companies }) => {
  return (
    <div className="row">
      {companies.map((item, index) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
            <CompanyCard
              logo={item.logo}
              name={item.name}
              type={item.type}
              description={item.description}
              bestFor={item.bestFor}
              website={item.website}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyList;
