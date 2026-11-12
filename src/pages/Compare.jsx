import PageTitle from "../components/PageTitle";
import CompareTable from "../components/CompareTable";
import companies from "../data/companies";

const Compare = () => {
  return (
    <div>
      <PageTitle
        title="Compare Terminals"
        subtitle="All the companies in one table."
      />
      <CompareTable companies={companies} />
    </div>
  );
};

export default Compare;
