import FormInput from "./FormInput";

const SuggestForm = ({ formData, onchange, onsubmit }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <form onSubmit={onsubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <FormInput
            label="Your Name"
            name="name"
            value={formData.name}
            placeholder="e.g. Ali"
            onchange={onchange}
          />
          <FormInput
            label="Terminal Name"
            name="terminal"
            value={formData.terminal}
            placeholder="e.g. Vyper"
            onchange={onchange}
          />
          <FormInput
            label="Why Do You Like It?"
            name="reason"
            value={formData.reason}
            placeholder="e.g. Fast trades"
            onchange={onchange}
          />
        </div>
        <button
          type="submit"
          className="mt-6 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 focus:outline-none"
        >
          Send Suggestion
        </button>
      </form>
    </section>
  );
};

export default SuggestForm;
