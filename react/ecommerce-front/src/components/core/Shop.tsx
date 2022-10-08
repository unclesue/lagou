import { Col, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import FilterCheckbox from "./FilterCheckbox";
import FilterRadio from "./FilterRadio";
import Layout from "./Layout";

const Shop = () => {
  const [myFilters, setMyFilter] = useState<{
    category: string[];
    price: number[];
  }>({ category: [], price: [] });

  useEffect(() => {
    console.log(myFilters);
  }, [myFilters]);

  return (
    <Layout title="shop" subTitle="shop page">
      <Row>
        <Col span="4">
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
        </Col>
        <Col span="20">right</Col>
      </Row>
    </Layout>
  );
};

export default Shop;
