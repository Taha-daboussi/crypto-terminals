const PageTitle = ({ title, subtitle }) => {
  return (
    <header className="mb-10 rounded-3xl bg-linear-to-br from-slate-900 to-emerald-800 px-6 py-14 text-center text-white shadow-xl">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg text-emerald-100">{subtitle}</p>
    </header>
  );
};

export default PageTitle;
