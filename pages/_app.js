import '../styles/globals.css';
//Navbar

import Navbar from "../components/Navbar.js";
import Sponsors from "./sponsers.js";


import { ChakraProvider } from '@chakra-ui/react';



function MyApp({ Component, pageProps }) {
  return (


    

    <ChakraProvider>
      {/* <Navbar> */}
     
      <Component {...pageProps} />
      {/* </Navbar> */}
       {/*<Sponsors/> */}
    </ChakraProvider>

  );
}

export default MyApp;
