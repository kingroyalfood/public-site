import React from 'react';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// import styles from './index.module.scss';

import { staticMedia } from "util/shortcuts";

function IndexPage() {
  return (
    <>
      <Grid container component="section" spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="primary" gutterBottom>
            Welcome!
          </Typography>

          <Typography fontSize={20}>
            We are King Royal Food, a package and food delivery service
            brand that is committed to cooking serving healthy culinary
            delights, providing clients with delicious shacks without
            any hassle.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            alt="Friends enjoying resoles together"
            component="img"
            src={staticMedia('/product-1.jpg')}
            width="904"
            height="625"
            sx={{ width: '100%' }}
          />
        </Grid>
      </Grid>

      <Box component="section">
        <Typography id="menu" variant="h2" color="primary" gutterBottom>
          Menu
        </Typography>
        <Box
          alt="Plate of resoles"
          component="img"
          src={staticMedia('/product-2.jpg')}
          width="904"
          height="625"
          sx={{ width: '100%' }}
        />
      </Box>

      <Box component="section">
        <Typography id="order" variant="h2" color="primary" gutterBottom>
          Order
        </Typography>
        <Typography>
          Order Form
        </Typography>
      </Box>
    </>
  );
}

export default IndexPage;
