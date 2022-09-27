import { Menu } from "antd";
import { RouterState } from "connected-react-router";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../store/reducers";

const useActive = (currentPath: string, path: string) => {
  return currentPath === path ? "ant-menu-item-selected" : "";
};

const Navigation = () => {
  const router = useSelector<AppState, RouterState>((state) => state.router);
  const pathname = router.location.hash.substring(1);

  return (
    <Menu mode="horizontal" selectable={false}>
      <Menu.Item key="home" className={useActive(pathname, "/")}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="shop" className={useActive(pathname, "/shop")}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item key="signin" className={useActive(pathname, "/signin")}>
        <Link to="/signin">登录</Link>
      </Menu.Item>
      <Menu.Item key="signup" className={useActive(pathname, "/signup")}>
        <Link to="/signup">注册</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
