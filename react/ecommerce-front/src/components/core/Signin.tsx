import { Button, Form, Input } from "antd";
import React from "react";
import Layout from "./Layout";

const Signin = () => {
  return (
    <Layout title="signin" subTitle="signin page">
      <Form labelCol={{ span: 1 }}>
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
