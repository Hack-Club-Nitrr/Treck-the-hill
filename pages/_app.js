import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import PrizeSection from '../components/PrizeSection';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>  
        <Component  {...pageProps}/>
      </Layout>
    </ChakraProvider>

  );
}

export default MyApp;