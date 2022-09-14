import { Box, Container, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Design System 🎨</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxWidth="container.md">
          <Heading marginBottom={12}>DC Docs page</Heading>

          <Box>
            <Text>Welcome to our Design system.</Text>
            <br />
            <Text>
              This website documents our React and Figma components together
              information on how to use them.
            </Text>
            <br />
            <Text>
              Use the navigation on the left to reach the things you are
              interested in.
            </Text>
            <br />
            <Text>
              This is an example build to show you how you can document your
              React Component Library using contentlayer and Next.
            </Text>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Home;
