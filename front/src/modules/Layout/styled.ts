import styled from "styled-components/macro";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1320px;
  margin: auto;

  @media (max-width: 1320px) {
    max-width: 100%;
  }
`;
