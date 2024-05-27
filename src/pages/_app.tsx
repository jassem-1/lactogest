import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Slide, ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Application from '@/components/Application';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>lactogest</title>
        <meta name="description" content="lactogest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          toastClassName={'duration-200'}
          className={'duration-200'}
          position="bottom-left"
          bodyClassName={'text-sm rounded-md duration-200'}
          transition={Slide}
        />
        <Application Component={Component} pageProps={pageProps} />
      </QueryClientProvider>
    </>
  );
}
