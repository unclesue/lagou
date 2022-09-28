import { Col, Menu, Row, Typography, Descriptions } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import React from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { Jwt } from "../../store/models/auth";

const { Title } = Typography;

const AdminDashboard = () => {
  const items = [
    {
      label: (
        <Link to="/admin/create/category">
          <ShoppingCartOutlined />
          创建分类
        </Link>
      ),
      key: "add-category",
    },
    {
      label: (
        <Link to="/admin/create/product">
          <UserOutlined />
          创建商品
        </Link>
      ),
      key: "add-product",
    },
    {
      label: (
        <Link to="/admin/create/product">
          <OrderedListOutlined />
          订单列表
        </Link>
      ),
      key: "order-list",
    },
  ];
  const { user } = isAuth() as Jwt;
  return (
    <Layout title="admin dashboard" subTitle="">
      <Row>
        <Col span={4}>
          <Title level={3}>管理员菜单</Title>
          <Menu items={items} />
        </Col>
        <Col span={20}>
          <Descriptions title="管理员基本信息" bordered>
            <Descriptions.Item label="昵称">{user.name}</Descriptions.Item>
            <Descriptions.Item label="邮件">{user.email}</Descriptions.Item>
            <Descriptions.Item label="角色">管理员</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Layout>
  );
};

export default AdminDashboard;
