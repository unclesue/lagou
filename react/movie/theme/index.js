// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'

const overrides = {
  styles,
  borders,
  // Other foundational style overrides go here
  components: {
    // Button, // 影响表单中的button,此处先注释
  },
}

export default extendTheme(overrides)
