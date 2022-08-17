import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

function TestFormik() {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("用户名不能为空")
      .matches(/^[A-Za-z]\w{5,12}$/, {
        message: "用户名必须以字母开头，并且长度为6~12个字符",
      }),
    hobbies: Yup.array().min(1, "请至少选择一项兴趣爱好"),
  });
  return (
    <Formik
      initialValues={{ username: "", hobbies: ["篮球", "乒乓球"] }}
      validationSchema={validationSchema}
      onSubmit={console.log}
    >
      <Form>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="div" />
        <Checkbox name="hobbies" label="足球" value="足球" />
        <Checkbox name="hobbies" label="篮球" value="篮球" />
        <Checkbox name="hobbies" label="乒乓球" value="乒乓球" />
        <ErrorMessage name="hobbies" component="div" />
        <input type="submit" />
      </Form>
    </Formik>
  );
}

function Checkbox({ label, ...props }) {
  const [field, meta, helper] = useField(props);
  const checkedValues = field.value;
  const { setValue } = helper;
  const handleChange = () => {
    const set = new Set(checkedValues);
    if (set.has(props.value)) {
      set.delete(props.value);
    } else {
      set.add(props.value);
    }
    setValue([...set]);
  };
  return (
    <div>
      <label>
        <input
          checked={checkedValues.includes(props.value)}
          type="checkbox"
          {...props}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
}

export default TestFormik;
