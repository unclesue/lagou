import { Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import Layout from "../core/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/actions/category";
import { AppState } from "../../store/reducers";
import { CategoryState } from "../../store/reducers/category";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { category } = useSelector<AppState, CategoryState>(
    (state) => state.category
  );
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const onFinish = (value: any) => {
    console.log(value);
  };
  return (
    <Layout title="add product">
      <Form
        onFinish={onFinish}
        labelCol={{ span: 2 }}
        initialValues={{ category: "" }}
      >
        <Form.Item wrapperCol={{ offset: 2 }}>
          <Upload>
            <Button icon={<UploadOutlined />}>上传商品封面</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="name" label="商品名称">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="商品描述">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="商品价格">
          <Input />
        </Form.Item>
        <Form.Item name="category" label="所属分类">
          <Select>
            <Select.Option value="">请选择分类</Select.Option>
            {category.result.map((item) => (
              <Select.Option key={item._id} value={item._id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="quantity" label="商品数量">
          <Input />
        </Form.Item>
        <Form.Item name="shipping" label="是否需要运输">
          <Select>
            <Select.Option value="1">是</Select.Option>
            <Select.Option value="0">否</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2 }}>
          <Button type="primary" htmlType="submit">
            添加商品
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default AddProduct;
