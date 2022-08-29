import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { MdMovie } from "react-icons/md";
import axios from "axios";
import { baseURL } from "../axios.config";
import { useRouter } from 'next/router'

export default function Movie({ data }) {
  const router = useRouter()
  return (
    <Container maxW={1200} mt="20px" color="white">
      <HStack fontSize="28px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          电影
        </Heading>
      </HStack>
      <HStack mt="20px" spacing={4}>
        {data.map((item) => (
          <Box w="290px" key={item.id} onClick={() => router.push(`/detail/${item.id}`)}>
            <Image src={item.url} alt={item.title} />
            <Text mt="10px">{item.title}</Text>
          </Box>
        ))}
      </HStack>
    </Container>
  );
}

export function loadMovie() {
  return axios.get("/api/movie", { baseURL });
}
