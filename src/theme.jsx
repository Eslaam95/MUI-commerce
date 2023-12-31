/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          myColor: {
            main: "#F9F9FC",
          },
          bg: {
            main: "#f6f6f6",
          },

          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          DashboardBg: {
            main: "#f9fafb",
          },
          customCard: {
            /* main: "#f9fafb",*/
            main: "#fff",
          },
          customCardSubtitle: {
            main: "#5f5f5f",
          },
        }
      : {
          // palette values for dark mode
          myColor: {
            main: "#252b32",
          },
          bg: {
            main: "#1D2021",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          DashboardBg: {
            main: "#111827",
          },
          customCard: {
            // main: "#494949",
            main: "#18212f",
          },
          customCardSubtitle: {
            main: "#dfdfdf",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode")
      ? localStorage.getItem("mode")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
