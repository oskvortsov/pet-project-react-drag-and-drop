import styled from "styled-components/macro";

import { getColor } from "../../../core/helpers/styles";

export const QuestionaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 8px;
  padding: 12px;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(19, 20, 20, 0.1);
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 13px;
  color: ${getColor("black")};
  margin-bottom: 16px;
`;

export const ButtonsGroups = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;
