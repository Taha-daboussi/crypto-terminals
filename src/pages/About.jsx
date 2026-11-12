import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import InfoCard from "../components/InfoCard";
import InfoList from "../components/InfoList";
import SourceTable from "../components/SourceTable";
import TipBox from "../components/TipBox";
import topics from "../data/topics";
import sources from "../data/sources";

const About = () => {
  return (
    <div>
      <PageTitle
        title="About This Site"
        subtitle="A CSCI426 project about crypto trading terminals."
      />
      <InfoCard
        title="The Project"
        text="This site explains what a crypto trading terminal is and shows the top companies. It is a student project for the course Web Programming Advanced (CSCI426). It uses React, React Router, and Bootstrap."
      />
      <SectionTitle title="What We Used" />
      <InfoList items={topics} />
      <SectionTitle title="Sources" />
      <SourceTable sources={sources} />
      <TipBox text="The company facts come from public websites and can change. Check each website for new information." />
    </div>
  );
};

export default About;
