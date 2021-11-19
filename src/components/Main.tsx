import Calculator from "./calculator/Calculator";
import Content from "./content.tsx/Content";
import Header from "./header/Header";
import { MainWrapper, HeaderAndContentWrapper } from "./componets";

const Main = () => {
  return (
    <MainWrapper>
      <HeaderAndContentWrapper>
        <Header />
        <Content />
      </HeaderAndContentWrapper>
      <Calculator />
    </MainWrapper>
  );
};

export default Main;
