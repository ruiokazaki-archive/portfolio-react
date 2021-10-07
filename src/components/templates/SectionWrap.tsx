import { VFC } from 'react';
import SectionWrap from './SectionWrap.style';

type Props = {
  children: React.ReactNode;
};

const SectionBackground: VFC<Props> = ({ children }) => (
  <SectionWrap>{children}</SectionWrap>
);

export default SectionBackground;
