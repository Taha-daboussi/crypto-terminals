import PageTitle from "../components/PageTitle";
import CompanyList from "../components/CompanyList";
import companies from "../data/companies";

const Companies = () => {
  return (
    <div>
      <PageTitle
        title="Top Companies"
        subtitle="Popular trading terminals and new trading ideas."
      />
      <CompanyList companies={companies} />
    </div>
  );
};

export default Companies;
