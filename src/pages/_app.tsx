import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import { AppProps as NextAppProps } from 'next/app';

import { CacheProvider, EmotionCache } from '@emotion/react';

import "style/app.scss";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import createEmotionCache from 'style/createEmotionCache';
import theme from 'style/theme';

import DefaultLayout from 'layout/DefaultLayout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
  pageTitle?: string,
}

type AppProps = NextAppProps & {
  Component: NextPageWithLayout,
  emotionCache?: EmotionCache
}

export default function App(props: AppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props;



  const getLayout = Component.getLayout ?? ((page) => (
    <DefaultLayout
      pageTitle={Component.pageTitle ?? process.env.NEXT_PUBLIC_APP_TITLE ?? 'My Application'}
    >
      {page}
    </DefaultLayout>
  ));

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
}
