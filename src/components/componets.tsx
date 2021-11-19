import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #2b303a, #3f4756);
  padding: 100px 100px 230px 100px;
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const HeaderAndContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 660px;
  margin-right: 20px;
`;
