import { VFC } from 'react';
import { BackgroundWrap, BackgroundText } from './SectionBackground.style';

type Props = {
  sectionTitle: string;
  children: React.ReactNode;
};

const SectionBackground: VFC<Props> = ({ sectionTitle, children }) => (
  <BackgroundWrap>
    <BackgroundText>{sectionTitle}</BackgroundText>
    {children}
  </BackgroundWrap>
);

export default SectionBackground;
