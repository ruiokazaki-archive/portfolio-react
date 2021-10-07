import { VFC } from 'react';
import { BackgroundText } from './SectionBackground.style';

type Props = {
  sectionTitle: string;
  children: React.ReactNode;
};

const SectionBackground: VFC<Props> = ({ sectionTitle, children }) => (
  <div>
    <BackgroundText>{sectionTitle}</BackgroundText>
    {children}
  </div>
);

export default SectionBackground;
