const StepCard = ({ number, title, text }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h2 className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-white">
        {number}
      </h2>
      <h5 className="mb-2 text-lg font-semibold text-slate-900">{title}</h5>
      <p className="text-slate-600">{text}</p>
    </section>
  );
};

export default StepCard;
