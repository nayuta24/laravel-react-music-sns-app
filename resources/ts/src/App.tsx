import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <BrowserRouter>
        <RecoilRoot>
          <ChakraProvider theme={theme}>
            <Router />
          </ChakraProvider>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
