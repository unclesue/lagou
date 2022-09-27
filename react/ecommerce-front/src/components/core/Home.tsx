import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";

const Home = () => {
  const state = useSelector((state) => state);
  return (
    <Layout title="home" subTitle="home page">
      <div>Home {JSON.stringify(state)}</div>
    </Layout>
  );
};

export default Home;
