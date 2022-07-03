import React, { ReactElement } from 'react';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography";
import { Breakpoint } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { staticMedia } from 'util/shortcuts';


export default function ApplicationBar({ maxContainerWidth }: {
  maxContainerWidth?: Breakpoint,
}): ReactElement {
  return (
    <AppBar position="static" >
      <Container maxWidth={maxContainerWidth}>
        <Box sx={{
          alignItems: 'center',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr 60px',
            sm: '1fr 120px',
            md: '1fr 180px',
          },
          gridGap: 16,
          py: { xs: 1, md: 2 },
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
      </Container>
        <Box sx={{
          backgroundColor: '#fff',
        }}>
          <Container sx={{
            alignItems:'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <nav>
              <Box sx={{
                color: '#000',
                display: 'flex',
                fontSize: 18,
                gap: 3,
                listStyleType: 'none',
                p: 0,
              }}>
                <Link fontSize="inherit" href="#menu" underline="hover">
                  Menu
                </Link>
                <Link fontSize="inherit" href="#order" underline="hover">
                  Order Form
                </Link>
              </Box>
            </nav>

            <Stack direction="row">
              <Tooltip title="WhatsApp">
                <IconButton
                  href="https://wa.me/6281238020007"
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Email">
                <IconButton
                  href="mailto:info@kingroyalfood.com"
                >
                  <MailIcon fontSize="large" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Instagram">
                <IconButton
                  href="https://www.instagram.com/kingroyalfood369/"
                  rel="noopener"
                  target="_blank"
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Container>
        </Box>
    </AppBar>
  );
}

// {NAV_LINK_ARRANGEMENT.map((linkInfo, index) => ({
//   <NextLink key={index} href={linkInfo.path}>
//     <a>{linkInfo.label}</a>
//   </NextLink>
// }))}