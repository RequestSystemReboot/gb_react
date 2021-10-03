import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";

export const Layout = (props) => {
  let theme = createTheme({
    palette: {
      mode: props.darktheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>{props.children}</main>
    </ThemeProvider>
  );
};
