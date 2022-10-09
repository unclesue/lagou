import { Button, Card, Col, Image, Row, Typography } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../store/models/product";
import moment from "moment";

const { Title, Paragraph } = Typography;

interface Props {
  product: Product;
  showViewProduct?: boolean;
  showCartBtn?: boolean;
}

const ProductItem: FC<Props> = ({
  product,
  showViewProduct = true,
  showCartBtn = true,
}) => {
  const showButtons = () => {
    let buttonArray = [];
    if (showViewProduct)
      buttonArray.push(
        <Button type="link">
          <Link to={`/product/${product._id}`}>查看详情</Link>
        </Button>
      );
    if (showCartBtn) {
      buttonArray.push(<Button type="link">加入购物车</Button>);
    }
    return buttonArray;
  };

  return (
    <Card
      hoverable
      cover={
        <Image
          preview={false}
          alt={product.name}
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      actions={showButtons()}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
      <Row>
        <Col span="12">销量: {product.sold}</Col>
        <Col span="12" style={{ textAlign: "right" }}>
          价格: {product.price}
        </Col>
      </Row>
      <Row>
        <Col span="12">
          上架时间: {moment(product.createdAt).format("YYYY-MM-DD")}
        </Col>
        <Col span="12" style={{ textAlign: "right" }}>
          所属分类: {product.category.name}
        </Col>
      </Row>
    </Card>
  );
};

export default ProductItem;
