import clsx from 'clsx';

import React, { ReactElement } from 'react';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Breakpoint } from '@mui/system';

import styles from "./ApplicationBar.module.scss";
import { staticMedia } from 'util/shortcuts';

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
              <Box sx={{
                alignItems: 'center',
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr 90px',
                  sm: '1fr 120px',
                  md: '1fr 180px',
                },
                p: 2,
                width: '100%',
              }}>
                <Typography variant="h1">
                  {process.env.NEXT_PUBLIC_APP_TITLE}
                </Typography>

                <Box
                  alt="King Royal Food Logo"
                  component="img"
                  src={staticMedia('/apple-touch-icon.png')}
                  width="180"
                  height="180"
                  sx={{
                    width: '100%',
                  }}
                />
              </Box>

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