import { VFC } from 'react';
import HeaderWrap from 'components/organisms/Header.style';
import HeaderLogo from 'components/atoms/HeaderLogo';
import HeaderNav from 'containers/molecules/HeaderNav';

const Header: VFC = () => (
  <HeaderWrap>
    <HeaderLogo />
    <HeaderNav />
  </HeaderWrap>
);
export default Header;
