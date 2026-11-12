import { useState } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import SuggestForm from "../components/SuggestForm";
import SuggestTable from "../components/SuggestTable";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    terminal: "",
    reason: "",
  });
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() === "" ||
      formData.terminal.trim() === "" ||
      formData.reason.trim() === ""
    )
      return;
    setSuggestions([...suggestions, formData]);
    setFormData({ name: "", terminal: "", reason: "" });
  };

  const handleDelete = (index) => {
    setSuggestions(suggestions.filter((_, i) => i !== index));
  };

  return (
    <div>
      <PageTitle
        title="Suggest a Terminal"
        subtitle="Tell us about a terminal that you like."
      />
      <SuggestForm
        formData={formData}
        onchange={handleChange}
        onsubmit={handleSubmit}
      />
      <SectionTitle title="Suggestions" />
      <SuggestTable suggestions={suggestions} ondelete={handleDelete} />
    </div>
  );
};

export default Contact;
