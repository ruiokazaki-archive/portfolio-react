import { VFC } from 'react';
import HeaderWrap from './Header.style';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderNav from '../../containers/molecules/HeaderNav';

const Header: VFC = () => (
  <HeaderWrap>
    <HeaderLogo />
    <HeaderNav />
  </HeaderWrap>
);
export default Header;
