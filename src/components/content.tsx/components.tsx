import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: space-between;
  & > ul {
    margin-top: 15px;
  }
`;

export const ContentTextWrapper = styled.div`
  display: flex;
  width: 380px;
  flex-direction: column;
`;

export const ContentTextAndImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
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
  object-fit: contain;
`;

export const ContentBulletsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-position: outside;
  list-style: none;
  padding-left: 0;
`;

export const BulletWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
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
  width: 100%;
`;
