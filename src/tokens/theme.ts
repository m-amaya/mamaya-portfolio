import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    hotPink: [
      "#ffe9ff",
      "#fed1fd",
      "#faa1f7",
      "#f66ef1",
      "#f243eb",
      "#f028e8",
      "#f018e8",
      "#d609cf",
      "#bf00b9",
      "#a700a1"
    ],
    lightBlue: [
      "#e0fbff",
      "#cbf2ff",
      "#9ae2ff",
      "#64d2ff",
      "#3cc5fe",
      "#23bcfe",
      "#09b8ff",
      "#00a1e4",
      "#0090cd",
      "#007cb5"
    ]
  },
  cursorType: "pointer",
  defaultGradient: { from: "lightBlue.6", to: "hotPink.4", deg: 90 },
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Pixelify Sans Variable', system-ui"
  },
  primaryColor: "lightBlue"
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
