import { Box, Flex, Img, Link, Text, HStack, Icon, IconButton} from '@chakra-ui/react';
import styles from '../styles/footer.module.css';
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsDiscord,
} from 'react-icons/bs';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Box className={styles.tth}>
        <Link href="https://www.trekthehill.co/" target={'_blank'}>
          <Img src="/trekthehill.png" alt="logo" />
        </Link>
        <Text as={'h2'} ml={10}>Trek The Hill 2022</Text>
      </Box>
      <Flex m={10} justifyContent={'space-between'}>
        <Text>© 2022, Trek The Hill All Rights Reserved.</Text>
        <HStack color={'black'}>
          <Link href='https://discord.gg/vdJX7j7N' target='_blank'>
            <IconButton rounded="full" aria-label="Discord" icon={<Icon as={BsDiscord} />} _focus={{border: "none"}}/>
          </Link>
          <Link href='https://www.instagram.com/trekthehill_' target='_blank'>
            <IconButton rounded="full" aria-label="Instagram" icon={<Icon as={BsInstagram} />} _focus={{border: "none"}}/>
          </Link>
          <Link href='https://twitter.com/TrekTheHill' target='_blank'>
            <IconButton rounded="full" aria-label="Twitter" icon={<Icon as={BsTwitter} />} _focus={{border: "none"}}/>
          </Link>
          <Link href='https://www.linkedin.com/company/trek-the-hill' target='_blank'>
            <IconButton rounded="full" aria-label="Facebook" icon={<Icon as={BsLinkedin} />} _focus={{border: "none"}}/>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};