import styled from "styled-components/macro";
import { getColorAlpha } from "../../../../core/helpers/styles";

export const TextZoneWrapper = styled.div``;

export const TextItemWrapper = styled.span`
  font-size: 24px;
  line-height: 32px;
`;

export const DropZone = styled.span`
  width: 128px;
  line-height: 0;
  max-height: 32px;
  display: inline-block;
  padding: 4px 6px;
  background-color: ${getColorAlpha("blue", 0.25)};
  box-shadow: inset 0 0 2px rgba(0, 37, 55, 0.3);
  border-radius: 8px;
`;
