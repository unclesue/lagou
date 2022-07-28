import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function CompanyNews() {
  return <div>公司新闻页面</div>;
}

function IndustryNews() {
  return <div>行业新闻页面</div>;
}

function Index() {
  return <div>首页页面</div>;
}

function News(props) {
    console.log(props, 'props')
  return (
    <div>
      <div>
        <Link to={`/news/company`}>公司新闻</Link>
        <Link to={`/news/industry`}>行业新闻</Link>
      </div>
      <Routes>
        <Route path={`/news/company`} element={<CompanyNews />} />
        <Route path={`/news/industry`} element={<IndustryNews />} />
      </Routes>
    </div>
  );
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
