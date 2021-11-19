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
  ContentTextAndImageWrapper,
} from "./components";

const Content = () => {
  return (
    <ContentWrapper>
      <ContentTextAndImageWrapper>
        <ContentTextWrapper>
          <ContentHeader>Fringilla Euismod Adipiscing Ipsum</ContentHeader>
          <ContentDescription>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
            lacinia bibendum nulla sed.
          </ContentDescription>
        </ContentTextWrapper>
        <ContentImage src={WebExpert} alt="content description image" />
      </ContentTextAndImageWrapper>
      <ContentBulletsWrapper>
        <BulletWrapper>
          <BulletRedIndicator />
          <BulletText>Tellus Ullamcorper Inceptos</BulletText>
        </BulletWrapper>
        <BulletWrapper>
          <BulletRedIndicator />
          <BulletText>Magna Condimentum</BulletText>
        </BulletWrapper>
        <ContentBulletsWrapper>
          <BulletWrapper>
            <BulletSilverIndicator />
            <BulletText>Mattis Tristique</BulletText>
          </BulletWrapper>
          <BulletWrapper>
            <BulletSilverIndicator />
            <BulletText>Pharetra Pellentesque Dapibus</BulletText>
          </BulletWrapper>
        </ContentBulletsWrapper>
        <BulletWrapper>
          <BulletRedIndicator />
          <BulletText>Aenean Inceptos</BulletText>
        </BulletWrapper>
        <BulletWrapper>
          <BulletRedIndicator />
          <BulletText>Parturient Bibendum</BulletText>
        </BulletWrapper>
      </ContentBulletsWrapper>
    </ContentWrapper>
  );
};

export default Content;
