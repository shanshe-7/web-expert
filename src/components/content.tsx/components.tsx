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
  @media only screen and (max-width: 375px) {
    width: 300px;
  }
`;

export const ContentTextAndImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

export const ContentHeader = styled.h2`
  font: 32px Sora-b;
  line-height: 35px;
  color: #fff;
  @media only screen and (max-width: 375px) {
    font-size: 22px;
  }
`;

export const ContentDescription = styled.p`
  font: 18px Sora-r;
  line-height: 30px;
  color: #fff;
  margin-top: 20px;
  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const ContentImage = styled.img`
  width: 240px;
  height: 180px;
  border-radius: 4px;
`;

export const ContentBulletsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-position: outside;
  list-style: none;
  padding-left: 0;
`;

export const NestedUlList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-position: outside;
  list-style: none;
  padding-left: 0;
  width: 100%;
`;

export const BulletWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const NestedListContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const NestedBullet = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  font: 18px Sora-r;
  line-height: 30px;
  color: #fff;
  width: 100%;
  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
