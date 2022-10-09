import { Button, Col, Empty, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../../store/actions/product";
import { AppState } from "../../store/reducers";
import { ProductState } from "../../store/reducers/product";
import FilterCheckbox from "./FilterCheckbox";
import FilterRadio from "./FilterRadio";
import Layout from "./Layout";
import ProductItem from "./ProductItem";

const Shop = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState<number>(0);
  const [myFilters, setMyFilter] = useState<{
    category: string[];
    price: number[];
  }>({ category: [], price: [] });
  const product = useSelector<AppState, ProductState>((state) => state.product);

  useEffect(() => {
    setSkip(0);
  }, [myFilters]);

  useEffect(() => {
    dispatch(filterProduct({ filters: myFilters, skip }));
  }, [myFilters, skip, dispatch]);

  const filterDOM = () => {
    return (
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <FilterCheckbox
          handleFilter={(filters: string[]) => {
            setMyFilter({ ...myFilters, category: filters });
          }}
        />
        <FilterRadio
          handleFilter={(filters: number[]) => {
            setMyFilter({ ...myFilters, price: filters });
          }}
        />
      </Space>
    );
  };

  const productDOM = () => (
    <Row gutter={[16, 16]}>
      {product.filter.products.map((item) => (
        <Col key={item._id} span="6">
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>
  );

  const loadMoreButton = () => {
    return (
      <Row>
        {product.filter.size >= 4 && (
          <Button onClick={loadMore}>加载更多</Button>
        )}
      </Row>
    );
  };

  const loadMore = () => {
    setSkip(skip + 4);
  };

  const noData = () => {
    return <Row>{product.filter.size === 0 && <Empty />}</Row>;
  };

  return (
    <Layout title="shop" subTitle="shop page">
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">
          {productDOM()} {loadMoreButton()} {noData()}
        </Col>
      </Row>
    </Layout>
  );
};

export default Shop;
