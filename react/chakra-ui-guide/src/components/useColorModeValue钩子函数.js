import { useColorMode, Box, Text, Button, useColorModeValue } from "@chakra-ui/react"

function Demo() {
  const {colorMode, toggleColorMode} = useColorMode()
  const bgColor = useColorModeValue("tomato", "skyblue")
  return <Box  w={200} p={10} bgColor={bgColor}>
    <Text>当前颜色模式为：{colorMode}</Text>
    <Button onClick={toggleColorMode}>切换颜色模式</Button>
  </Box>
}

export default Demo

