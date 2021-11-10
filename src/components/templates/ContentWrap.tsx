import { VFC, ReactNode } from 'react';
import ContentWrap from 'components/templates/ContentWrap.style';

type Props = {
  children: ReactNode;
};

const SectionBackground: VFC<Props> = ({ children }) => (
  <ContentWrap>{children}</ContentWrap>
);

export default SectionBackground;
