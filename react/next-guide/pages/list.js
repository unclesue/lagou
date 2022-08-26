import Head from "next/head";
import styles from "/styles/List.module.css";
import { readFile } from "fs";
import { promisify } from "util";
import { join } from "path";

const read = promisify(readFile);

export default function List({ data }) {
  return (
    <>
      <Head>
        <title>list page</title>
      </Head>
      <div className="box">
        <div className="demo">内置styled-jsx.</div>
        <div className={styles.demo2}>css模块.</div>
        <div>{data}</div>
      </div>
      {/* 内置styled-jsx，仅做用于组件内部 */}
      <style jsx>{`
        .demo {
          color: tomato;
        }
      `}</style>
    </>
  );
}

// 获取组件静态生成需要的数据，并通过props方式将数据传递给组件
// export async function getStaticProps(context) {
//   const data = await read(join(process.cwd(), "pages", "_app.js"), "utf-8");
//   console.log(context, data);
//   return {
//     props: { data },
//   };
// }

// 服务端渲染，每次请求时才构建html
export async function getServerSideProps(context) {
  const data = await read(join(process.cwd(), "pages", "_app.js"), "utf-8");
  console.log(context, data);
  return {
    props: { data },
  };
}
