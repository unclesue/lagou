import { Button, Form, Input, Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetSignup, signup, SignupPayload } from "../../store/actions/auth";
import { AppState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth";
import Layout from "./Layout";

const Signup = () => {
  const dispatch = useDispatch();
  const auth = useSelector<AppState, AuthState>((state) => state.auth);
  const [form] = Form.useForm();

  const onFinish = (values: SignupPayload) => {
    dispatch(signup(values));
  };

  useEffect(() => {
    console.log('first')
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields();
    }
  }, [auth, form]);

  const showSuccess = () => {
    if (auth.signup.loaded && auth.signup.success) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary" key="signin">
              <Link to="/signin">登录</Link>
            </Button>,
          ]}
        />
      );
    }
  };

  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return (
        <Result
          status="warning"
          title="注册失败"
          subTitle={auth.signup.message}
        />
      );
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetSignup());
    };
  }, [dispatch]);

  return (
    <Layout title="signup" subTitle="signup page">
      {showSuccess()}
      {showError()}
      <Form form={form} labelCol={{ span: 1 }} onFinish={onFinish}>
        <Form.Item
          label="昵称"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 1 }}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Signup;
