import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import Loader from '../components/Loader';

function Layout({ children }) {

    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 5000);
    }, [])

    return (
        <>
            <Head>
                <title>Trek The Hill</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Flex flexDir={['column', 'column', 'row']}>
                {!Loading ? <Loader /> :
                    <>
                        <Navbar />
                        {children}
                    </>}
            </Flex>
        </>
    )
}

export default Layout