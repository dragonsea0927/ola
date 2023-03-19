import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    white: {
      main: string;
    };
  }

  interface ThemeOptions {
    white?: {
      main?: React.CSSProperties['color'];
    };
  }
}

let theme = createTheme({
  white: {
    main: '#ffffff',
  },

  palette: {
    primary: {
      main: '#ebecf0',
      light: '#f6f7f9',
      dark: '#ebecef',
    },
    secondary: {
      main: '#087ea4',
      light: '#149eca',
    },
    error: {
      main: red.A400,
    },
  },

  typography: {
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),

    h1: {
      fontSize: '52px',
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: '-0.01562em',
      color: '#23272f',
      fontStyle: 'normal',
    },

    h2: {
      fontSize: '52px',
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: '-0.01562em',
      color: '#23272f',
      fontStyle: 'normal',
    },

    h3: {
      fontSize: '13px',
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: '0.025em',
      color: '#5e687e',
      fontStyle: 'normal',
    },

    h4: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: '0.025em',
      color: '#23272f',
      fontStyle: 'normal',
    },

    body1: {
      fontSize: '17px',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.025em',
      color: '#404756',
      fontStyle: 'normal',
    },

    body2: {
      fontSize: '17px',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.025em',
      color: '#404756',
      fontStyle: 'normal',
    },

    button: {
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.02857em",
      textTransform: "capitalize",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme