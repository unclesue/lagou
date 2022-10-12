import React, { FC, useEffect, useState } from "react";
import { CartItem } from "../../helpers/cart";
import { Typography } from "antd";

const { Title } = Typography;

interface Props {
  cart: CartItem[];
  setTotalAmount: (price: number) => void;
}

const TotalAmount: FC<Props> = ({ cart, setTotalAmount }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const totalAmount = parseFloat(
      cart
        .reduce((current, next) => (current += next.count * next.price), 0)
        .toFixed(2)
    );
    setAmount(totalAmount);
    setTotalAmount(totalAmount);
  }, [cart, setTotalAmount]);

  return <Title level={5}>商品总价：{amount}</Title>;
};

export default TotalAmount;
