import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#eeccb3',
          }
        }
      },

      MuiContainer: {
        defaultProps: {
          maxWidth: 'md',
        }
      }
    },

    typography: {
      fontFamily: '"Times New Roman", sans-serif',

      h1: {
        fontSize: 60,
      },

      h2: {
        fontSize: 48,
      },

      h3: {
        fontSize: 32,
      }
    },

    palette: {
      primary: {
        main: '#f6632d',
      },
      secondary: {
        main: '#eeccb3',
      },
      error: {
        main: red.A400,
      },
    },
  })
);

export default theme;
