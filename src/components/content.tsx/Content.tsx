import WebExpert from "../../assets/img/web-expert.svg";

import {
  ContentTextWrapper,
  ContentWrapper,
  ContentHeader,
  ContentDescription,
  ContentImage,
  ContentBulletsWrapper,
  BulletWrapper,
  BulletRedIndicator,
  BulletText,
  BulletSilverIndicator,
} from "./components";

const Content = () => {
  return (
    <ContentWrapper>
      <ContentTextWrapper>
        <ContentHeader>Fringilla Euismod Adipiscing Ipsum</ContentHeader>
        <ContentDescription>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Maecenas faucibus mollis interdum. Aenean lacinia
          bibendum nulla sed.
        </ContentDescription>
        <ContentBulletsWrapper>
          <BulletWrapper>
            <BulletRedIndicator />
            <BulletText>Tellus Ullamcorper Inceptos</BulletText>
          </BulletWrapper>
          <BulletWrapper>
            <BulletRedIndicator />
            <BulletText>Magna Condimentum</BulletText>
          </BulletWrapper>
          <BulletWrapper>
            <BulletSilverIndicator />
            <BulletText>Mattis Tristique</BulletText>
          </BulletWrapper>
          <BulletWrapper>
            <BulletSilverIndicator />
            <BulletText>Pharetra Pellentesque Dapibus</BulletText>
          </BulletWrapper>
          <BulletWrapper>
            <BulletRedIndicator />
            <BulletText>Aenean Inceptos</BulletText>
          </BulletWrapper>
          <BulletWrapper>
            <BulletRedIndicator />
            <BulletText>Parturient Bibendum</BulletText>
          </BulletWrapper>
        </ContentBulletsWrapper>
      </ContentTextWrapper>
      <ContentImage src={WebExpert} alt="content description image" />
    </ContentWrapper>
  );
};

export default Content;
