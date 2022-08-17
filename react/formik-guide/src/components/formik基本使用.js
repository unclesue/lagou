import { useFormik } from "formik";

function Formik() {
  const formik = useFormik({
    initialValues: { username: "张三", password: "123456" },
    onSubmit: console.log,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <input type="submit" />
    </form>
  );
}

export default Formik;
