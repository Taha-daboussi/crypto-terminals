import InfoCard from "./InfoCard";

const InfoList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        return <InfoCard key={index} title={item.title} text={item.text} />;
      })}
    </div>
  );
};

export default InfoList;
