import { MainContainer, globalStyles } from '@/styles/globals';
import type { AppProps } from 'next/app';
import { AsideNav } from '@/components/AsideNav';
import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next'

globalStyles();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  if(Component.getLayout) return getLayout(<Component {...pageProps} />);

  return (
    <MainContainer>
      <AsideNav />
      <Component {...pageProps} />
    </MainContainer>
  );
  
}
