import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Signin from "./表单登录";
import Signup from "./表单注册";

export default function Form() {
  return (
    <Box p="4">
      <Tabs>
        <TabList>
          <Tab>登录</Tab>
          <Tab>注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Signin />
          </TabPanel>
          <TabPanel>
            <Signup />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
