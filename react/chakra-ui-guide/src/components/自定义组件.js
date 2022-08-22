import { Box, useStyleConfig } from "@chakra-ui/react";

function Content(props) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Content', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

function Demo() {
  return <Content size="sm" variant="solid">这是文章内容</Content>
}

export default Demo
