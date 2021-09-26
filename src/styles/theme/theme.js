import { ThemeProvider } from "styled-components";
import GlobalStyles from "../global.styles";

function theme() {
  return {
    fonts: {
      inter: "Inter, sans-serif",
    },
    colors: {
      white: "#FFFFFF",
      black: "#191919;",
      blue: "#4A8EFF",
      background: " #1A1A1A",
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
