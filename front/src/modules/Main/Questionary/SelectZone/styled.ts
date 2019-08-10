import styled from "styled-components/macro";
import { getColor } from "../../../../core/helpers/styles";

export const SelectZoneWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 24px;
  flex: 1;
`;

export const SelectZoneItemWrapper = styled.div`
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

  &:hover {
    opacity: 0.9;
  }
`;
