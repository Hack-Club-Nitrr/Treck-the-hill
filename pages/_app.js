//Navbar
import Navbar from "../components/Navbar.js";
import "../styles/globals.css";
import {ChakraProvider} from "@chakra-ui/react";

import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
