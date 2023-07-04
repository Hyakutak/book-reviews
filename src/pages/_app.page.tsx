import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { AsideNav } from '@/components/AsideNav';
import { MainContainer, globalStyles } from '@/styles/globals';

globalStyles();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  if(Component.getLayout) return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer>
        <AsideNav />
        <Component {...pageProps} />
      </MainContainer>
    </QueryClientProvider>
  );
  
}
