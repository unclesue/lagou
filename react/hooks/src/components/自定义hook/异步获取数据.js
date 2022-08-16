import { useEffect, useState } from "react";

const useGetPost = () => {
  const [post, setPost] = useState({});
  useEffect(() => {
    // getData().then(res => setPost(res))
    (async function () {
      const data = await getData();
      setPost(data);
    })();
  }, []);
  return { post, setPost };
};

function TestCustomHook() {
  const { post } = useGetPost();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

function getData() {
  return new Promise((resolve) =>
    resolve({ title: "测试文章", body: "测试文章内容，测试文章内容" })
  );
}

export default TestCustomHook;
