import styled from "styled-components/macro";
import {
  color,
  ColorProps,
  height,
  HeightProps,
  space,
  SpaceProps,
  width,
  WidthProps
} from "styled-system";
import { getColor, getColorAlpha } from "../../helpers/styles";
import { ColorsType } from "../../theme";

export interface ButtonWrapperProps
  extends WidthProps,
    HeightProps,
    ColorProps,
    SpaceProps {
  color?: ColorsType;
  dots?: boolean;
}

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getColor("black")};
  color: ${getColor("white")};
  border-radius: 40px;
  padding: 0 12px;
  height: 32px;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;

  &:hover {
    background-color: ${getColorAlpha("black", 0.9)};
  }

  ${width};
  ${height};
  ${color};
  ${space};

  ${props =>
    props.dots &&
    `
    position: relative;
    
    &:after {
    width: 100%;
    height: 100%;
    top: -1px;
    content: "•••";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }`}
`;
