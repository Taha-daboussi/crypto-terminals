import FormInput from "./FormInput";

const SuggestForm = ({ formData, onchange, onsubmit }) => {
  return (
    <section className="card mb-4">
      <div className="card-body">
        <form onSubmit={onsubmit}>
          <FormInput
            label="Your Name"
            name="name"
            value={formData.name}
            onchange={onchange}
          />
          <FormInput
            label="Terminal Name"
            name="terminal"
            value={formData.terminal}
            onchange={onchange}
          />
          <FormInput
            label="Why Do You Like It?"
            name="reason"
            value={formData.reason}
            onchange={onchange}
          />
          <button type="submit" className="btn btn-primary">
            Send Suggestion
          </button>
        </form>
      </div>
    </section>
  );
};

export default SuggestForm;
