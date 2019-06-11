    
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#5c29db',
      contrastText: '#fff',
    },
    mint: {
      light: '#ff7961',
      main: '#41c191',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  spacing: `1em`
});

const colors = {
  dark_violet: "#300D4F",

  background_lightviolet: "#f9f9ff",
  violet_highlight: "#6754ae",
  violet: "#b4b3f1",
  white: "#fefefe",
  black: "#0b0b0b",
  shadow1: "#d0d0f5",
  shadow2: "#ced5e2",

  dark_grey: "#1d2127",
  yellow: "#3f56b5",
  red: "#FA5562",
  highlight_vio: "#5c29db",
};
export { theme, colors };