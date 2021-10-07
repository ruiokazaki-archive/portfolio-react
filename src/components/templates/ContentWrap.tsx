import { VFC } from 'react';
import ContentWrap from './ContentWrap.style';

type Props = {
  children: React.ReactNode;
};

const SectionBackground: VFC<Props> = ({ children }) => (
  <ContentWrap>{children}</ContentWrap>
);

export default SectionBackground;
