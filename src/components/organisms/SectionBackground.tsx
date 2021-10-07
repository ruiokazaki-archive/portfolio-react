import { VFC } from 'react';
import { BackgroundText } from './SectionBackground.style';

type Props = {
  sectionTitle: string;
  children: React.ReactNode;
};

const SectionBackground: VFC<Props> = ({ sectionTitle, children }) => (
  <div className="hover:bg-green-700">
    <BackgroundText>{sectionTitle}</BackgroundText>
    {children}
  </div>
);

export default SectionBackground;
