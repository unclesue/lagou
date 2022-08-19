import { useColorMode, Box, Text, Button, useColorModeValue, LightMode } from "@chakra-ui/react"

function Demo() {
  const {colorMode, toggleColorMode} = useColorMode()
  const bgColor = useColorModeValue("cyan.400", "gray.400")
  return <Box  w={200} p={10} bgColor={bgColor}>
    <Text>当前颜色模式为：{colorMode}</Text>
    <LightMode>
      <Button>我就是我，不一样的烟火</Button>
    </LightMode>
    <Button onClick={toggleColorMode}>切换颜色模式</Button>
  </Box>
}

export default Demo

