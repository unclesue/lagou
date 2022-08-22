import { Box, chakra } from "@chakra-ui/react"

const Card = chakra('div', {
  baseStyle: {
    shadow: 'lg',
    rounded: 'lg',
    bg: 'white',
    p: 2,
    border: '1px',
    borderColor: "gray.400"
  }
})

function Demo() {
  return <Box margin="2">
    <Card>123</Card>
  </Box>
}

export default Demo
