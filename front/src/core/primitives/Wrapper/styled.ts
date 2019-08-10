import styled from "styled-components/macro";

import {
  alignItems,
  display,
  DisplayProps,
  justifyContent
} from "styled-system";

import { ColorsType } from "../../theme";

export interface WrapperStyleProps extends DisplayProps {
  color?: ColorsType;
}

export const WrapperStyle = styled.div`
  display: flex;

  ${alignItems};
  ${justifyContent};
  ${display};
`;
