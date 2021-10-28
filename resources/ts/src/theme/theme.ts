import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.50",
        color: "gray.800"
      }
    },
    components: {
      Button: {
        baseStyle: {
          _focus: { outline: "none" }
        }
      }
    }
  }
});
export default theme;
