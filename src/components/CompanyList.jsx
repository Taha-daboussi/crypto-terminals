import CompanyCard from "./CompanyCard";

const CompanyList = ({ companies }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {companies.map((item, index) => {
        return (
          <CompanyCard
            key={index}
            id={item.id}
            logo={item.logo}
            name={item.name}
            type={item.type}
            bestFor={item.bestFor}
          />
        );
      })}
    </div>
  );
};

export default CompanyList;
