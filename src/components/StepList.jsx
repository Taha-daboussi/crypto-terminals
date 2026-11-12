import StepCard from "./StepCard";

const StepList = ({ steps }) => {
  return (
    <div className="row">
      {steps.map((item, index) => {
        return (
          <div className="col-sm-12 col-md-6" key={index}>
            <StepCard number={item.id} title={item.title} text={item.text} />
          </div>
        );
      })}
    </div>
  );
};

export default StepList;
