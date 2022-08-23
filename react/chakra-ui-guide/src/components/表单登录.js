import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Button
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaCheck } from "react-icons/fa";

export default function Form() {
  return (
    <Box as="form" w="2xl" mx="auto" mt="10" p="4" bg="gray.100">
      <Stack spacing="24px">
        <FormControl>
          <InputGroup borderColor="gray.300">
            <InputLeftAddon children={<FaUserAlt />} />
            <Input type="text" name="username" placeholder="请输入用户名" />
          </InputGroup>
          <FormHelperText>用户名是必填项</FormHelperText>
        </FormControl>
        <InputGroup borderColor="gray.300">
          <InputLeftAddon children={<FaLock />} />
          <Input type="password" name="password" placeholder="请输入密码" />
          <InputRightAddon children={<FaCheck />} />
        </InputGroup>
        <Button
          colorScheme="teal"
          _hover={{ bgColor: "tomato" }}
          type="submit"
          boxShadow="xl"
        >
          登录
        </Button>
      </Stack>
    </Box>
  );
}
