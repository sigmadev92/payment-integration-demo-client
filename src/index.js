import ReactDom from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
const HTMLRootDiv = document.getElementById("root");
const reactRoot = ReactDom.createRoot(HTMLRootDiv);
reactRoot.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
