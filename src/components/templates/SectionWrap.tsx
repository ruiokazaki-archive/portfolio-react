import { VFC } from 'react';
import { BackgroundWrap } from './SectionWrap.style';

type Props = {
  children: React.ReactNode;
};

const SectionBackground: VFC<Props> = ({ children }) => (
  <BackgroundWrap>{children}</BackgroundWrap>
);

export default SectionBackground;
