const TipBox = ({ text }) => {
  return (
    <section className="mt-14 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center font-medium text-amber-900">
      <p>{text}</p>
    </section>
  );
};

export default TipBox;
