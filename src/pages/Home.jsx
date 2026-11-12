import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import IntroBox from "../components/IntroBox";
import NavItem from "../components/NavItem";
import StepList from "../components/StepList";
import TipBox from "../components/TipBox";
import steps from "../data/steps";

const Home = () => {
  return (
    <div>
      <PageTitle
        title="What Is a Crypto Trading Terminal?"
        subtitle="One app to trade on many crypto exchanges."
      />
      <IntroBox />
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <NavItem
          style="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          to="/Companies"
          label="See the Companies"
        />
        <NavItem
          style="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
          to="/Compare"
          label="Compare Them"
        />
      </div>
      <SectionTitle title="How It Works" />
      <StepList steps={steps} />
      <TipBox text="Safety tip: never allow withdrawals on an API key that you give to a terminal." />
    </div>
  );
};

export default Home;
