import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../store/actions/product";
import { AppState } from "../../store/reducers";
import { ProductState } from "../../store/reducers/product";
import Layout from "./Layout";
import ProductItem from "./ProductItem";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector<AppState, ProductState>(
    (state) => state.product
  );
  const { productId } = useParams<{ productId: string }>();
  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);
  return (
    <Layout title="product">
      <Row gutter={36}>
        <Col span={18}>
          <ProductItem showViewProduct={false} product={product} />
        </Col>
        <Col span={6}></Col>
      </Row>
    </Layout>
  );
};

export default Product;
