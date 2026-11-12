import MyButton from "./MyButton";
import EmptyRow from "./EmptyRow";

const SuggestTable = ({ suggestions, ondelete }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead>
          <tr className="bg-slate-900 text-xs tracking-wide text-slate-300 uppercase">
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Terminal</th>
            <th className="px-4 py-3 font-semibold">Reason</th>
            <th className="px-4 py-3 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.length === 0 ? (
            <EmptyRow text="No suggestions yet. Add the first one above." />
          ) : (
            suggestions.map((item, index) => {
              return (
                <tr
                  className="border-t border-slate-100 transition hover:bg-emerald-50"
                  key={index}
                >
                  <td className="px-4 py-4 font-medium text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-4 text-slate-700">{item.terminal}</td>
                  <td className="px-4 py-4 text-slate-700">{item.reason}</td>
                  <td className="px-4 py-4">
                    <MyButton
                      style="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-700 transition hover:bg-red-50"
                      label="Delete"
                      onclick={() => ondelete(index)}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SuggestTable;
