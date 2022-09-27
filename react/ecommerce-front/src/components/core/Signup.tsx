import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { signup, SignupPayload } from "../../store/actions/auth";
import Layout from "./Layout";

const Signup = () => {
  const dispatch = useDispatch()
  const onFinish = (values: SignupPayload) => {
    console.log(values);
    dispatch(signup(values))
  };
  return (
    <Layout title="signup" subTitle="signup page">
      <Form labelCol={{ span: 1 }} onFinish={onFinish}>
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
