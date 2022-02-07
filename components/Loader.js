import { Center, Img } from '@chakra-ui/react';

function Loader() {
  return (
    <Center
      width={'100%'}
      height={'100vh'}
      style={{ background: 'rgb(0 25 94)' }}
    >
      <Img src="/loader.gif" alt="pre-loader" />
    </Center>
  );
}

export default Loader;
