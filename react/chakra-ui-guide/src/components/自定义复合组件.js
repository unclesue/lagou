// 1. Import the components and hook
import {
  createStylesContext,
  // StylesProvider,
  useMultiStyleConfig,
  // useStyles,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const [StylesProvider, useStyles] = createStylesContext("Menu");

function Menu(props) {
  const { size, variant, children, ...rest } = props;

  // 2. Consume the `useMultiStyleConfig` hook
  const styles = useMultiStyleConfig("Menu", { size, variant });

  return (
    <Flex __css={styles.menu} {...rest}>
      {/* 3. Mount the computed styles on `StylesProvider` */}
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Flex>
  );
}

function MenuItem(props) {
  // 4. Read computed `item` styles from styles provider
  const styles = useStyles();
  return <Box as="button" __css={styles.item} {...props} />;
}

const logo = require("../assets/images/logo.png");

function Demo() {
  return (
    <Box w="100%" boxShadow='lg' p="2">
      <Flex align="center">
        <Image src={logo} w="10" h="10" mr="4" />
        <Menu boxShadow="none">
          <MenuItem>
            <Link to="/form">表单</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/card">卡片</Link>
          </MenuItem>
        </Menu>
      </Flex>
    </Box>
  );
}

export default Demo;
