import NavItem from "./NavItem";

const CompareTable = ({ companies }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead>
          <tr className="bg-slate-900 text-xs tracking-wide text-slate-300 uppercase">
            <th className="px-4 py-3 font-semibold">Company</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Best For</th>
            <th className="px-4 py-3 font-semibold">Website</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item, index) => {
            return (
              <tr
                className="border-t border-slate-100 transition hover:bg-emerald-50"
                key={index}
              >
                <td className="px-4 py-4">
                  <NavItem
                    style="font-semibold text-emerald-700 hover:underline"
                    to={`/Companies/${item.id}`}
                    label={item.name}
                  />
                </td>
                <td className="px-4 py-4 text-slate-700">{item.type}</td>
                <td className="px-4 py-4 text-slate-700">{item.bestFor}</td>
                <td className="px-4 py-4 text-slate-500">{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
