import StepCard from "./StepCard";

const StepList = ({ steps }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((item, index) => {
        return (
          <StepCard
            key={index}
            number={item.id}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default StepList;
