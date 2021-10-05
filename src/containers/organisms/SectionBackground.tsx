import { VFC } from 'react';
import SectionBackground from '../../components/organisms/SectionBackground';

type Props = {
  sectionTitle: string;
  children: React.ReactNode;
};

const EnhancedSectionBackground: VFC<Props> = ({ sectionTitle, children }) => {
  const sectionTitleToUpperCase: string = sectionTitle.toUpperCase();

  return (
    <SectionBackground sectionTitle={sectionTitleToUpperCase}>
      {children}
    </SectionBackground>
  );
};

export default EnhancedSectionBackground;
