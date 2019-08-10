export type ColorsType =
  | "white"
  | "black"
  | "gray"
  | "blue"
  | "blueLight"
  | string;

export const colors = {
  white: "#ffffff",
  black: "#1C1D1F",
  gray: "#CCCCCC",
  blue: "#3EBEFF",
  blueLight: "#3EBEFF"
};

export const theme = {
  /** Общие цвета */
  colors: colors
};

export default theme;
