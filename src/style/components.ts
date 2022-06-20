// @ts-nocheck

import styled from '@emotion/styled';
import { Theme } from "@mui/material/styles";

// -----------------------------------------------------------------------------
export const PageHeaderStyle = styled('header')(
  ({ theme }: { theme?: Theme }) => ({
    backgroundImage: 'linear-gradient(135deg, #96c93d 1%, #00b09b 100%)',
    color: theme.palette.common.white,
    paddingTop: 84,
    paddingBottom: 75,
    overflow: 'hidden',
    position: 'relative',

    "&::after": {
        position: 'absolute',
        bottom: -1,
        left: '-20%',
        right: '-20%',
        zIndex: 1,
        display: 'block',
        content: '""',
        height: '100%',
        background: 'url("/images/curve.svg") bottom no-repeat',
        backgroundSize: 'contain',
        pointerEvents: 'none',
    }
  }),
);
