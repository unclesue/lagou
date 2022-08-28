import { Box, Button, Container, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaSignInAlt, FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { css } from "@emotion/react";

const SignInAndJoin = styled.div`
  height: 52px;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  float: left;
  color: #fff;
  & > button {
    padding: 0 10px;
    font-size: 12px;
    &:first-child:after {
      content: "";
      width: 1px;
      height: 10px;
      background: #fff;
      position: absolute;
      right: 0;
      top: 16px;
    }
  }
`;

const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: #fff;
  font-size: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const logo = css`
  width: 140px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Header() {
  return (
    <div>
      <Box h="52px" borderBottom="1px solid #393939">
        <Container h="52px" maxW={1200} pos="relative">
          <SignInAndJoin>
            <Button colorScheme="transparent" leftIcon={<FaSignInAlt />}>
              登录
            </Button>
            <Button colorScheme="transparent" leftIcon={<BsFillPersonFill />}>
              注册
            </Button>
          </SignInAndJoin>
          <Image css={logo} src="/images/logo.png" alt="logo" />
          <Search>
            <FaSearch />
          </Search>
        </Container>
      </Box>
    </div>
  );
}
