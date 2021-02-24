import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Neso | Your Social Media Platform</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
