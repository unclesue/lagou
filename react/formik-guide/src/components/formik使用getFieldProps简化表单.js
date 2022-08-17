import { useFormik } from "formik";
import * as Yup from "yup";

function Formik() {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: console.log,
    validationSchema: Yup.object({
      username: Yup.string()
        .required("用户名不能为空")
        .matches(/^[A-Za-z]\w{5,12}$/, {
          message: "用户名必须以字母开头，并且长度为6~12个字符",
        }),
      password: Yup.string()
        .required("密码不能为空")
        .matches(/^\w{6,12}$/, {
          message: "密码只能由字母、数字、下划线组成，并且长度为6~12个字符",
        }),
    }),
  });
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...getFieldProps("username")} />
      <p>{errors.username && touched.username && errors.username}</p>
      <input type="text" {...getFieldProps("password")} />
      <p>{errors.password && touched.password && errors.password}</p>
      <input type="submit" />
    </form>
  );
}

export default Formik;
