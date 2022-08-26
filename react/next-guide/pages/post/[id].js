// 基于动态路由的静态生成
// 基于参数为页面组件生成html页面，有多少参数就生成多少html页面
// 在构建应用时，先获取用户可以访问的所有路由参数，再根据路由参数获取具体数据，然后根据数据生成静态html

import { useRouter } from "next/router";

export default function Post({ data }) {
  const route = useRouter();
  if (route.isFallback) return <div>loading</div>;
  return (
    <div>
      <h1>
        {data.id}: {data.title}
      </h1>
    </div>
  );
}

// 返回路由参数所对应的具体数据
export async function getStaticProps({ params }) {
  console.log("getStaticProps");
  let data;
  switch (params.id) {
    case "1":
      data = { id: params.id, title: "title 1" };
      break;
    case "2":
      data = { id: params.id, title: "title 2" };
      break;
    case "3":
      data = { id: params.id, title: "title 3" };
      break;
    default:
      data = {};
      break;
  }
  return {
    props: {
      data,
    },
  };
}

// 返回用户可以访问的所有路由参数
// fallback=false 如果客户端发送了一个不在范围内的请求参数，则展示404页面
// fallback=true 服务器会再次执行getStaticProps，根据参数获取数据，再进行静态生成
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}
