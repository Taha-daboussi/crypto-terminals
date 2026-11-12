import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import IntroBox from "../components/IntroBox";
import InfoList from "../components/InfoList";
import StepList from "../components/StepList";
import TipBox from "../components/TipBox";
import features from "../data/features";
import types from "../data/types";
import steps from "../data/steps";

const Home = () => {
  return (
    <div>
      <PageTitle
        title="What Is a Crypto Trading Terminal?"
        subtitle="One app to trade on many crypto exchanges."
      />
      <IntroBox />
      <SectionTitle title="Main Features" />
      <InfoList items={features} />
      <SectionTitle title="Types of Terminals" />
      <InfoList items={types} />
      <SectionTitle title="How It Works" />
      <StepList steps={steps} />
      <TipBox text="Safety tip: never allow withdrawals on an API key that you give to a terminal." />
    </div>
  );
};

export default Home;
