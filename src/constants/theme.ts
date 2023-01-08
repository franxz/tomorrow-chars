import { ThemeOptions } from "@mui/material";
import { LcdScreenBoxTheme } from "../components/LcdScreenBox";

// https://mui.com/material-ui/customization/theming/#custom-variables
declare module "@mui/material/styles" {
  interface Theme extends MyThemeOptions {}
  interface ThemeOptions extends Partial<MyThemeOptions> {}
}

export type MyThemeOptions = {
  myComponents: LcdScreenBoxTheme; // & ...
};

export type MyTheme = ThemeOptions & MyThemeOptions;

const primaryColors = {
  light: "#FFEA54",
  main: "#FFCB3C",
  dark: "#FEAA2B",
  contrastText: "#000",
};

export const THEME: MyTheme = {
  palette: {
    primary: primaryColors,
    background: {
      default: "#202040",
      paper: "#202060",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
        },
      },
    },
  },
  myComponents: {
    LcdScreenBox: { color: primaryColors.main, bgColor: "#000" },
  },
};
