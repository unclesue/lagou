import { Badge, Menu } from "antd";
import { RouterState } from "connected-react-router";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TotalContext } from "../../anotherStore";
import { isAuth } from "../../helpers/auth";
import { itemCount } from "../../helpers/cart";
import { Jwt } from "../../store/models/auth";
import { AppState } from "../../store/reducers";

const isActive = (currentPath: string, path: string) => {
  return currentPath === path ? "ant-menu-item-selected" : "";
};

const Navigation = () => {
  const router = useSelector<AppState, RouterState>((state) => state.router);
  const [count, setCount] = useContext(TotalContext)
  const pathname = router.location.hash.substring(1);

  const getDashboardUrl = () => {
    let url = "/user/dashboard";
    const auth = isAuth();
    if (auth) {
      const {
        user: { role },
      } = auth as Jwt;
      role === 1 && (url = "/admin/dashboard");
    }
    return url;
  };

  useEffect(() => {
    setCount(itemCount())
  })

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item key="home" className={isActive(pathname, "/")}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="shop" className={isActive(pathname, "/shop")}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item className={isActive(pathname, "/cart")}>
        <Link to="/cart">
          购物车
          <Badge count={count} offset={[5, -10]} />
        </Link>
      </Menu.Item>
      {!isAuth() && (
        <>
          <Menu.Item key="signin" className={isActive(pathname, "/signin")}>
            <Link to="/signin">登录</Link>
          </Menu.Item>
          <Menu.Item key="signup" className={isActive(pathname, "/signup")}>
            <Link to="/signup">注册</Link>
          </Menu.Item>
        </>
      )}
      {isAuth() && (
        <Menu.Item
          key="dashboard"
          className={isActive(pathname, getDashboardUrl())}
        >
          <Link to={getDashboardUrl()}>dashboard</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navigation;
