import styled from "styled-components/macro";
import { getColor } from "../../../../core/helpers/styles";

export const VariantsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const VariantsItemWrapper = styled.div`
  font-size: 24px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
  background-color: ${getColor("blue")};
  color: ${getColor("white")};
  box-shadow: inset 0 0 2px rgba(0, 37, 55, 0.3);
  border-radius: 8px;
  margin-right: 4px;
  margin-bottom: 8px;
  cursor: grab;

  &:hover {
    opacity: 0.9;
  }

  ${props => props.isDragging && `opacity: 0.5;`};
`;
