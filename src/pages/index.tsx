import React from 'react';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// import styles from './index.module.scss';

import {
  ContentSection,
  ContentSectionHeading,
} from "components/helpers";
import { staticMedia } from "util/shortcuts";


const MENU_ITEM_ARRANGEMENT = [
  { name: 'Chicken Vegetables', price: 11 },
  { name: 'Vegan', price: 12 },
  { name: 'Choco Cheese Banana', price: 13 },
  { name: 'Golden Prawn', price: 16 },
  { name: 'Smoked Beef', price: 16 },
  { name: 'Cheese Mozzarella', price: 16 },
];


function IndexPage() {
  return (
    <>
      <ContentSection>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ContentSectionHeading text="Welcome!" />

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
      </ContentSection>

      <ContentSection>
        <ContentSectionHeading text="Our Menu" />

        <Typography variant="h3" mt={4}>
          RESOLES
        </Typography>
        <Box component="ol" sx={{
          p: 0,
          width: '100%',
        }}>
          {MENU_ITEM_ARRANGEMENT.map((menuItem) => (
            <Box
              component="li"
              key={menuItem.name}
              sx={{
                display: 'flex',
                fontWeight: 'bold',
                fontSize: 18,
                justifyContent: 'space-between',
                listStyleType: 'none',
                maxWidth: 400,
              }}
            >
              <Typography fontWeight="inherit" fontSize="inherit">
                {menuItem.name}
              </Typography>
              <Typography fontWeight="inherit" fontSize="inherit">
                {menuItem.price}k
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          alt="Plate of resoles"
          component="img"
          src={staticMedia('/product-2.jpg')}
          width="904"
          height="625"
          sx={{ width: '100%', mt: 4 }}
        />
        <Typography align="center">
          Our food is frozen prior to delivery and can keep in the freezer for
          up to one month at -18c or below.
        </Typography>
      </ContentSection>

      <ContentSection>
        <ContentSectionHeading text="Order" />
        <Typography>
          Order Form
        </Typography>
      </ContentSection>
    </>
  );
}

export default IndexPage;
