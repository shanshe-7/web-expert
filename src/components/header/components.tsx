import styled from "styled-components";

export const HeaderTitle = styled.h1`
  color: #fff;
  font: 40px Sora-b;
  line-height: 50px;
  @media only screen and (max-width: 375px) {
    font-size: 32px;
  }
`;

export const HeaderDescription = styled.p`
  font: 18px Sora-r;
  line-height: 24px;
  color: #fff;
  margin-top: 20px;
  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const DescRed = styled.span`
  color: #911812;
  text-decoration: underline;
`;
