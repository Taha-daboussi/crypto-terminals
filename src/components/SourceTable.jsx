const SourceTable = ({ sources }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-slate-900 text-xs tracking-wide text-slate-300 uppercase">
            <th className="px-4 py-3 font-semibold">Source</th>
            <th className="px-4 py-3 font-semibold">Website</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((item, index) => {
            return (
              <tr
                className="border-t border-slate-100 transition hover:bg-emerald-50"
                key={index}
              >
                <td className="px-4 py-4 font-medium text-slate-900">
                  {item.name}
                </td>
                <td className="px-4 py-4 text-slate-500">{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SourceTable;
