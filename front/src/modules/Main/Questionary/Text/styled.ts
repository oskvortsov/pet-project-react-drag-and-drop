import styled from "styled-components/macro";
import { getColor, getColorAlpha } from "../../../../core/helpers/styles";

export const TextZoneWrapper = styled.div`
  flex: 1;
`;

export const TextItemWrapper = styled.span`
  font-size: 24px;
  line-height: 32px;
`;

export const DropZoneWrapper = styled.span`
  width: 128px;
  line-height: 0;
  max-height: 32px;
  display: inline-block;
  padding: 4px 6px;
  background-color: ${getColorAlpha("blue", 0.25)};
  box-shadow: inset 0 0 2px rgba(0, 37, 55, 0.3);
  border-radius: 8px;

  ${props =>
    props.isOver &&
    `
    border: 1px dashed blue;
    max-height: 30px;
    background: white;
    margin: -1px 0;
    
    * {
      visibility: hidden;
    }
  `};
  margin-bottom: 2px;
`;

export const DragZoneWrapper = styled.span`
  line-height: 30px;
  max-height: 32px;
  display: inline-block;
  padding: 4px 6px;
  background-color: ${getColor("blue")};
  color: ${getColor("white")};
  border-radius: 8px;
  margin-bottom: 2px;

  ${props => props.isDragging && "opacity: 0.5;"};
`;
