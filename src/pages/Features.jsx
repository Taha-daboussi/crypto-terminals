import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import InfoList from "../components/InfoList";
import TipBox from "../components/TipBox";
import features from "../data/features";
import types from "../data/types";

const Features = () => {
  return (
    <div>
      <PageTitle
        title="Features"
        subtitle="What a crypto trading terminal can do for you."
      />
      <SectionTitle title="Main Features" />
      <InfoList items={features} />
      <SectionTitle title="Types of Terminals" />
      <InfoList items={types} />
      <TipBox text="Pick a terminal that works with the exchanges that you already use." />
    </div>
  );
};

export default Features;
