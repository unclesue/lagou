import axios from "axios"
import React, { FC } from 'react'
import { Button } from "antd"
import { CartItem } from '../../helpers/cart'
import { Jwt } from "../../store/models/auth"
import { isAuth } from "../../helpers/auth"
import { Link } from "react-router-dom"

interface Props {
  totalAmount: number
  address: string
  cart: CartItem[]
}

const Pay: FC<Props> = ({ totalAmount, address, cart }) => {
  const getPayUrl = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/alipay`, {
        totalAmount,
        subject: "测试订单标题",
        body: "测试订单描述",
        products: cart.map(product => ({
          count: product.count,
          product: product._id
        })),
        address,
        userId: (isAuth() as Jwt).user._id
      })
      .then(response => {
        console.log('response', response)
        // window.location.href = response.data.result
      })
  }

  const showButton = () => {
    return isAuth() ? (
      <Button onClick={getPayUrl}>提交订单</Button>
    ) : (
      <Button>
        <Link to="/signin">登录</Link>
      </Button>
    )
  }

  return <>{showButton()}</>
}

export default Pay
