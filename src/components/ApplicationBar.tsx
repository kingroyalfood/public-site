import clsx from 'clsx';

import React, { ReactElement } from 'react';

// import NextLink from "next/link";
import Image from 'next/image'

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Breakpoint } from '@mui/system';

import AppIcon from 'media/images/app-icon.png';

// import Link from './Link';


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
              <Image src={AppIcon} height={48} width={48} />
              Dojo Wishlist
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