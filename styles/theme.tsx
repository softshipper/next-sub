import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#0d3c61",
      main: "#0d3c61",
      dark: "#0d3c61",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
   fontFamily: "Poppins"  
}
});

export default theme;