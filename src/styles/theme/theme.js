import { ThemeProvider } from "styled-components";
import GlobalStyles from "../global.styles";

function theme() {
  return {
    fonts: {
      roboto: "Inter",
    },
    colors: {
      white: "#FFFFFF",
      black: "#191919;",
      primary: "#4A8EFF",
    },
  };
}

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
