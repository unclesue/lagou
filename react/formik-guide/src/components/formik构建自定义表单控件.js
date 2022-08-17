import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

function TestFormik() {
  const validationSchema = Yup.object({
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
  });
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
          <MyInput
            name="password"
            placeholder="请输入密码"
            type="password"
            id="password"
            label="密码"
          />
          <input type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}

function MyInput({ label, ...props }) {
  const [field, meta] = useField(props)
  return <div>
    <label htmlFor={props.id}>{props.label}</label>
    <input {...field} {...props} />
    {meta.touched && meta.error ? <p className="error">{meta.error}</p> : null}
  </div>
}

export default TestFormik;
