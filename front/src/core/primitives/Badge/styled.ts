import styled from "styled-components/macro";

import {
  color,
  ColorProps,
  fontSize,
  height,
  HeightProps,
  width,
  WidthProps,
  FontSizeProps,
  space,
  SpaceProps,
  lineHeight,
  LineHeightProps,
  borderRadius,
  BorderRadiusProps
} from "styled-system";

import { getColor } from "../../helpers/styles";
import { ColorsType } from "../../theme";

export interface BadgeWrapperProps
  extends ColorProps,
    WidthProps,
    HeightProps,
    FontSizeProps,
    SpaceProps,
    LineHeightProps,
    BorderRadiusProps {
  color?: ColorsType;
}

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  line-height: inherit;
  color: ${getColor("white")};
  background-color: ${getColor("gray")};
  border-radius: 4px;

  ${color};
  ${width};
  ${height};
  ${fontSize};
  ${lineHeight};
  ${space};
  ${borderRadius};
`;
