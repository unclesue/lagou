import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../config";
import { isAuth } from "../../helpers/auth";
import { Jwt } from "../../store/models/auth";
import Layout from "../core/Layout";

const AddCategory = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    async function addCategory() {
      try {
        const { user, token } = isAuth() as Jwt;
        const { data } = await axios.post<{ name: string }>(
          `${API}/category/create/${user._id}`,
          { name },
          { headers: { authorization: `Bearer ${token}` } }
        );
        message.success(`${data.name} 分类添加成功`);
      } catch (error: any) {
        message.error(error.response.data.error);
      }
    }
    name && addCategory();
  }, [name]);

  const onFinish = (value: { name: string }) => {
    setName(value.name);
  };
  return (
    <Layout title="添加分类">
      <Form onFinish={onFinish}>
        <Form.Item
          label="分类名称"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加分类
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default AddCategory;
