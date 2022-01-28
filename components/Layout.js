import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Navbar from './Navbar';

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Treck The Hill</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Flex flexDir={'column'}>
                <>
                    <Navbar />
                    {children}
                </>
            </Flex>
        </>
    )
}

export default Layout