import { Formik, Form, Field, ErrorMessage } from "formik";
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
      firstName: Yup.string().required("firstName不能为空")
  });
  return (
    <Formik
      initialValues={{
        username: "",
        desc: "简介",
        type: "option 2",
        password: "",
        firstName: "firstName",
        lastName: ""
      }}
      onSubmit={console.log}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <Field type="text" name="username" />
          <br />
          <ErrorMessage name="username" component="div" />
          <Field as="textarea" name="desc" />
          <br />
          <Field as="select" name="type">
            <option value="option 1">option 1</option>
            <option value="option 2">option 2</option>
          </Field>
          <br />
          {/* Renders a CustomInputComponent */}
          <Field
            as={CustomInputComponent}
            name="password"
            placeholder="请输入密码"
            type="password"
            id="password"
            label="密码"
          />
          <ErrorMessage name="password" component="div" />
          {/* Or a callback function */}
          <Field name="firstName">
            {({field, form, meta}) => (
              <div>
                <input type="text" {...field} placeholder="First Name"/>
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            )}
          </Field>
          {/* Renders a CustomInputComponent */}
          <Field name="lastName" component={CustomInputComponent2} placeholder="Last Name"/>
          <input type="submit" />
        </Form>
      )}
    </Formik>
  );
}

const CustomInputComponent = (props) => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
    <input className="my-custom-input" type="text" {...props} />
  </div>
);

const CustomInputComponent2 = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
     <input type="text" {...field} {...props} />
     {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
   </div>
);

export default TestFormik;
