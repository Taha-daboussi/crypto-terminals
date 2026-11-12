const FormInput = ({ label, name, value, placeholder, onchange }) => {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-medium text-slate-700"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="text"
        className="block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
        required
      />
    </div>
  );
};

export default FormInput;
