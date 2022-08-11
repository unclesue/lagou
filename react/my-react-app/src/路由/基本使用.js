import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Index() {
  return <div>首页页面</div>;
}

function News() {
  return <div>新闻页面</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/index">首页</Link>
        <Link to="/news">新闻</Link>
      </div>
      <Routes>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
