import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Layout from "../../components/layout";
import axios from "axios";
import { baseURL } from "../../axios.config";

const DetailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`;

export default function Detail({ detail }) {
  return (
    <Layout>
      <Container color="white" maxW={1200} mt="70px">
        <Heading as="h2" size="xl">
          {detail.title}
        </Heading>
        <Heading
          mt="10px"
          as="h4"
          size="lg"
          color="gray.500"
          fontWeight="light"
        >
          {detail.sub}
        </Heading>
        <Divider mt="10px" />
        <Box display="flex" justifyContent="space-between" mt="10px">
          <Text>作者: {detail.author}</Text>
          <Text>发布时间: {detail.publish}</Text>
        </Box>
        <Divider mt="10px" />
        <Box
          css={DetailContainer}
          dangerouslySetInnerHTML={{ __html: detail.content }}
        ></Box>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  let { data: detail } = await axios.get(`/api/detail?id=${params.id}`, {
    baseURL,
  });
  return {
    props: { detail },
  };
}

export async function getStaticPaths() {
  const { data } = await axios.get("/api/videos", { baseURL });
  const paths = data.map((id) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
}
