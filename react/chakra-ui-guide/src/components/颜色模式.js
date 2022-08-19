import { useColorMode, Box, Text, Button } from "@chakra-ui/react"

function Demo() {
  const {colorMode, toggleColorMode} = useColorMode()
  return <Box  w={200} p={10} bgColor={colorMode === "light" ?　"tomato" : "skyblue"}>
    <Text>当前颜色模式为：{colorMode}</Text>
    <Button onClick={toggleColorMode}>切换颜色模式</Button>
  </Box>
}

export default Demo

