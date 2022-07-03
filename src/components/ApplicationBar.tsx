import clsx from 'clsx';

import React, { ReactElement } from 'react';

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Breakpoint } from '@mui/system';

import styles from "./ApplicationBar.module.scss";


function PersistentAppBar({ children }: {
  children: React.ReactNode,
}): ReactElement {
  const opaque = useScrollTrigger({
    threshold: 30,
    disableHysteresis: true,
  });

  return (
    <div className={clsx(styles.appbar, opaque ? styles.appbarOpaque : null)}>
      {children}
    </div>
  );
}


export default function ApplicationBar({ maxContainerWidth }: {
  maxContainerWidth?: Breakpoint,
}): ReactElement {
  return (
    <PersistentAppBar>
        <AppBar>
          <Container maxWidth={maxContainerWidth}>
            <Toolbar disableGutters className={styles.toolbar}>
              <img
                alt="King Royal Food Logo"
                src={`${process.env.NEXT_PUBLIC_URL_PREFIX}/apple-touch-icon.png`}
                width="180"
                height="180"
              />
              {process.env.NEXT_PUBLIC_APP_TITLE}
            </Toolbar>
          </Container>
        </AppBar>
    </PersistentAppBar>
  );
}

// {NAV_LINK_ARRANGEMENT.map((linkInfo, index) => ({
//   <NextLink key={index} href={linkInfo.path}>
//     <a>{linkInfo.label}</a>
//   </NextLink>
// }))}