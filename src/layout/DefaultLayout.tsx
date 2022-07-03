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
      </Head>

      <ApplicationBar />

      <Container sx={{ pt: 4 }}>
        {children}
      </Container>
    </>
  );
}
