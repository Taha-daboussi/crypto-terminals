import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import CompanyInfo from "../components/CompanyInfo";
import NavItem from "../components/NavItem";
import companies from "../data/companies";

const CompanyDetail = () => {
  const { id } = useParams();
  const company = companies.filter((item) => item.id === Number(id))[0];

  return (
    <div>
      {company ? (
        <CompanyInfo
          logo={company.logo}
          name={company.name}
          type={company.type}
          description={company.description}
          bestFor={company.bestFor}
          website={company.website}
        />
      ) : (
        <PageTitle
          title="Company Not Found"
          subtitle="This company is not in our list."
        />
      )}
      <div className="text-center mb-4">
        <NavItem to="/Companies" label="Back to Companies" />
      </div>
    </div>
  );
};

export default CompanyDetail;
