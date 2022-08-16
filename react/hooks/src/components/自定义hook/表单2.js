import { useState } from "react";

function useForm(initialForm) {
  const [form, setForm] = useState(initialForm);
  return {
    form,
    onChange: (key, event) => {
      let value = event.target.value;
      switch (event.target.type) {
        case "checkbox":
        case "select-multiple":
          if (!Array.isArray(form[key])) break;
          const index = form[key].findIndex((i) => i === value);
          if (index !== -1) {
            form[key].splice(index, 1);
          } else {
            form[key].push(value);
          }
          value = form[key];
          break;
        default:
          break;
      }
      setForm({ ...form, [key]: value });
    },
    checked: (key, value) => form[key].includes(value),
  };
}

function TestCustomHook() {
  const { form, onChange, checked } = useForm({
    username: "",
    category: "option 2",
    types: [],
    tags: ["tag 2"],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  const styles = {
    formItem: {
      width: 80,
      textAlign: "right",
      display: "inline-block",
      paddingRight: 10,
    },
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <span style={styles.formItem}>输入框: </span>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={onChange.bind(this, "username")}
        />
      </div>
      <div className="form-item">
        <span style={styles.formItem}>单选: </span>
        <select
          name="category"
          value={form.category}
          onChange={(event) => onChange("category", event)}
        >
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
        </select>
      </div>
      <div className="form-item">
        <span style={styles.formItem}>多选: </span>
        <select
          name="tag"
          value={form.tags}
          multiple
          onChange={(event) => onChange("tags", event)}
        >
          <option value="tag 1">tag 1</option>
          <option value="tag 2">tag 2</option>
          <option value="tag 3">tag 3</option>
        </select>
      </div>
      <div className="form-item">
        <span style={styles.formItem}>复选框: </span>
        <input
          type="checkbox"
          value="first_checkbox"
          checked={checked("types", "first_checkbox")}
          onChange={onChange.bind(this, "types")}
        />
        <label>first_checkbox</label>
        <input
          type="checkbox"
          value="second_checkbox"
          checked={checked("types", "second_checkbox")}
          onChange={onChange.bind(this, "types")}
        />
        <label>second_checkbox</label>
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default TestCustomHook;
