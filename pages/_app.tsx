import { Box, ChakraProvider, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Sidebar } from 'next-components/sidebar/Sidebar';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { theme } from '../lib-src';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box margin={5}>
        <Link href="/">
          <Heading>DS Docs page</Heading>
        </Link>
        <Grid templateColumns="3fr 9fr" gap={4}>
          <GridItem>
            <Sidebar />
          </GridItem>
          <GridItem>
            <Component {...pageProps} />
          </GridItem>
          <GridItem />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
