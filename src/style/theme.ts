import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#eeeeee',
          }
        }
      },

      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        }
      }
    },

    typography: {
      fontFamily: '"Montserrat", sans-serif',

      h1: {
        fontSize: 60,
        fontWeight: 500,
      }
    },

    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
  })
);

export default theme;
