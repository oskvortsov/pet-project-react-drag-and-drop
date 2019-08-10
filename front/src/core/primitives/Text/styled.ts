import styled from "styled-components/macro";
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
  opacity,
  OpacityProps
} from "styled-system";

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
  ${color};
  ${opacity};
`;
