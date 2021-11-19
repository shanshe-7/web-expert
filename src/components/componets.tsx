import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #2b303a, #3f4756);
  padding: 100px 100px 230px 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 100px;
  -webkit-gap: 100px;
  -moz-gap: 100px;
`;

export const HeaderAndContentWrapper = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 660px;
  width: auto;
`;
