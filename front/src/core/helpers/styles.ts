import { curry, path } from "ramda";

export const getColor = curry(
  (color: string, props: any) =>
    path(["theme", "colors", color], props) || color
);

export const getColorAlpha = curry((color: string, alpha: number, props: any) =>
  hexToRgba(path(["theme", "colors", color], props) || color, alpha)
);

export const hexToRgba = (hex: string, alpha = 1): string => `rgba(
    ${parseInt(hex.slice(1, 3), 16)},
    ${parseInt(hex.slice(3, 5), 16)}, 
    ${parseInt(hex.slice(5, 7), 16)}
    ${alpha !== undefined && `, ${alpha}`}
  )`;
