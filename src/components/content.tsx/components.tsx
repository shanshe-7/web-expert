import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`;

export const ContentTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
`;

export const ContentHeader = styled.h2`
  font: 32px, Sora-b;
  line-height: 35px;
  color: #fff;
`;

export const ContentDescription = styled.p`
  font: 18px, Sora-r;
  line-height: 30px;
  color: #fff;
  margin-top: 20px;
`;

export const ContentImage = styled.img`
  width: 240px;
  height: 180px;
  object-fit: contain;
`;

export const ContentBulletsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const BulletWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const BulletRedIndicator = styled.div`
  width: 16px;
  height: 4px;
  margin-left: 5px;
  margin-right: 9px;
  background: linear-gradient(90deg, #911812 0%, #e1261c 100%); ;
`;

export const BulletSilverIndicator = styled.div`
  width: 12px;
  height: 4px;
  margin-left: 35px;
  margin-right: 9px;
  background: linear-gradient(90deg, #d3dae8 0%, #a7b7d8 100%);
`;

export const BulletText = styled.div`
  font: 18px, Sora-r;
  line-height: 30px;
  color: #fff;
`;
