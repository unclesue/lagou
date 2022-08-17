import { useFormik } from "formik";

function Formik() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { username: "", password: "" },
      onSubmit: console.log,
      validate: (values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "用户名不能为空";
        } else if (!/^[A-Za-z]\w{5,12}$/.test(values.username)) {
          errors.username = "用户名必须以字母开头，并且长度为6~12个字符";
        }
        if (!values.password) {
          errors.password = "密码不能为空";
        } else if (!/^\w{6,12}$/.test(values.password)) {
          errors.password =
            "密码只能由字母、数字、下划线组成，并且长度为6~12个字符";
        }
        return errors;
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{errors.username && touched.username && errors.username}</p>
      <input
        type="text"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p>{errors.password && touched.password && errors.password}</p>
      <input type="submit" />
    </form>
  );
}

export default Formik;
