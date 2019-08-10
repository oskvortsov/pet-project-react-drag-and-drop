import styled from "styled-components/macro";
import {
  ColorProps,
  fontSize,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
  opacity,
  OpacityProps
} from "styled-system";
import { getColor, getColorAlpha } from "../../helpers/styles";

import { ColorsType } from "../../theme";

export interface TextWrapperProps
  extends FontSizeProps,
    LineHeightProps,
    ColorProps,
    OpacityProps {
  color?: ColorsType;
}

export const TextWrapper = styled.div`
  font-size: inherit;
  line-height: inherit;
  color: inherit;

  ${fontSize};
  ${lineHeight};
  ${opacity};
  ${props => props.color && `color: ${getColor(props.color, props)};`};
  ${props =>
    props.color &&
    props.opacity &&
    `color: ${getColorAlpha(props.color, props.opacity, props)};`};
`;
