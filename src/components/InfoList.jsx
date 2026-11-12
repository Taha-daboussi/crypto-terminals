import InfoCard from "./InfoCard";

const InfoList = ({ items }) => {
  return (
    <div className="row">
      {items.map((item, index) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
            <InfoCard title={item.title} text={item.text} />
          </div>
        );
      })}
    </div>
  );
};

export default InfoList;
