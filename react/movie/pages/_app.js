import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/globals.css";

console.log(theme)
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
