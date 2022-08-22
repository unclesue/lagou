import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Select,
  FormLabel,
  Switch,
  RadioGroup,
  Radio,
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
        <RadioGroup>
          <Stack direction="row">
            <Radio value="1">男</Radio>
            <Radio value="2">女</Radio>
          </Stack>
        </RadioGroup>
        <Select placeholder="请选择学科" borderColor="gray.300">
          <option value="Java">Java</option>
          <option value="大前端">大前端</option>
        </Select>
        <FormControl display="flex" alignItems="center">
          <Switch id="email-alerts" />
          <FormLabel htmlFor="email-alerts" ml="2" mb="0">
            是否同意协议?
          </FormLabel>
        </FormControl>
        <Button
          colorScheme="teal"
          _hover={{ bgColor: "tomato" }}
          type="submit"
          boxShadow="xl"
        >
          注册
        </Button>
      </Stack>
    </Box>
  );
}
