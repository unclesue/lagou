import { Button, Form, Input, Result } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { signin, SigninPayload } from "../../store/actions/auth";
import { Jwt } from "../../store/models/auth";
import { AppState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth";
import Layout from "./Layout";

const Signin = () => {
  const dispatch = useDispatch();
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  const onFinish = (values: SigninPayload) => {
    dispatch(signin(values));
  };

  const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return (
        <Result
          status="warning"
          title="登录失败"
          subTitle={auth.signin.message}
        />
      );
    }
  };

  const redirectToDashboard = () => {
    const auth = isAuth();
    if (auth) {
      const {
        user: { role },
      } = auth as Jwt;
      if (role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/user/dashboard" />
      }
    }
  };

  return (
    <Layout title="signin" subTitle="signin page">
      {showError()}
      {redirectToDashboard()}
      <Form labelCol={{ span: 1 }} onFinish={onFinish}>
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
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Signin;
