const FormInput = ({ label, name, value, onchange }) => {
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        value={value}
        onChange={onchange}
        required
      />
    </div>
  );
};

export default FormInput;
