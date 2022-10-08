import React, { useEffect } from "react";
import Layout from "./Layout";
import Search from "./Search";
import ProductItem from "./ProductItem";
import { Col, Row, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { ProductState } from "../../store/reducers/product";
import { getProduct } from "../../store/actions/product";

const { Title } = Typography;

const Home = () => {
  const dispatch = useDispatch();
  const { createdAt, sold } = useSelector<AppState, ProductState>(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(getProduct("createdAt"));
    dispatch(getProduct("sold"));
  }, [dispatch]);

  return (
    <Layout title="home" subTitle="home page">
      <Search />
      <Title level={5}>最新上架</Title>
      <Row gutter={[16, 16]}>
        {createdAt.products.map((item) => (
          <Col key={item._id} span="6">
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
      <Title level={5}>最受欢迎</Title>
      <Row gutter={[16, 16]}>
        {sold.products.map(item => (
          <Col key={item._id} span="6">
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;
