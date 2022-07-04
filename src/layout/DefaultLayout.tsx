import React from "react";
import Head from 'next/head';

import Container from "@mui/material/Container";

import ApplicationBar from "components/ApplicationBar";


import { staticMedia } from "util/shortcuts";


export default function Layout({ children, pageTitle }: {
  children: React.ReactNode,
  pageTitle: string
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href={staticMedia('/favicon.ico')} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta property="og:title" content="King Royal Food" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingroyalfood.github.io/public-site/" />
        <meta property="og:image" content={staticMedia('/android-chrome-192x192.png')} />
        <meta property="og:description" content="A package and food delivery service brand that is committed to cooking serving healthy culinary delights, providing clients with delicious snacks without any hassle." />
      </Head>

      <ApplicationBar />

      <Container sx={{ pt: 4 }}>
        {children}
      </Container>
    </>
  );
}
