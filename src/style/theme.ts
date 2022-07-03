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
      fontFamily: '"Times New Roman", sans-serif',

      h1: {
        fontSize: 60,
        fontWeight: 500,
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
