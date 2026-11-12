const InfoCard = ({ title, text }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg">
      <h5 className="mb-2 text-lg font-semibold text-slate-900">{title}</h5>
      <p className="text-slate-600">{text}</p>
    </section>
  );
};

export default InfoCard;
