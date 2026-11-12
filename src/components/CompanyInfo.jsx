import MyImage from "./MyImage";

const CompanyInfo = ({ logo, name, type, description, bestFor, website }) => {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-linear-to-br from-slate-900 to-emerald-800 px-6 py-12 text-center text-white">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
          <MyImage src={logo} alt={name} />
        </div>
        <h1 className="text-3xl font-extrabold sm:text-5xl">{name}</h1>
        <span className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-emerald-200 ring-1 ring-white/20">
          {type}
        </span>
      </div>
      <div className="p-6 sm:p-10">
        <p className="text-lg leading-relaxed text-slate-700">{description}</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <p className="rounded-xl bg-slate-100 p-4 font-semibold text-slate-900">
            Best for: {bestFor}
          </p>
          <p className="rounded-xl bg-emerald-50 p-4 font-semibold text-emerald-700">
            Website: {website}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
