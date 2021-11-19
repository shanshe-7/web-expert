import { HeaderDescription, HeaderTitle, DescRed } from "./components";

const Header = () => {
  return (
    <>
      <HeaderTitle>Quam Tristique Condimentum</HeaderTitle>
      <HeaderDescription>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.{" "}
        <DescRed>Curabitur blandit</DescRed> tempus porttitor. Integer posuere
        erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id
        ligula porta felis euismod semper.
      </HeaderDescription>
    </>
  );
};

export default Header;
