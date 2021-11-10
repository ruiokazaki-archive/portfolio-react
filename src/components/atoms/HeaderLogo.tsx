import { VFC } from 'react';
import { Logo, Pink } from 'components/atoms/HeaderLogo.style';

const HeaderLogo: VFC = () => (
  <Logo>
    <Pink>&lt;</Pink> ruru&apos;s portfolio <Pink>/&gt;</Pink>
  </Logo>
);
export default HeaderLogo;
