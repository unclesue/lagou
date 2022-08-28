import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { MdMovie } from "react-icons/md";

export default function Movie() {
  return (
    <Container maxW={1200} mt="20px" color="white">
      <HStack fontSize="28px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">电影</Heading>
      </HStack>
      <HStack mt="20px" spacing={4}>
        <Box w="290px">
          <Image src="/images/item_1.jpg" alt="" />
          <Text mt="10px">蜘蛛侠捐了蜘蛛侠捐了蜘蛛侠捐了</Text>
        </Box>
        <Box w="290px">
          <Image src="/images/item_1.jpg" alt="" />
          <Text mt="10px">蜘蛛侠捐了蜘蛛侠捐了蜘蛛侠捐了</Text>
        </Box>
      </HStack>
    </Container>
  );
}
