import { VFC } from 'react';
import SectionBackground from 'components/molecules/SectionBackground';

type Props = {
  sectionTitle: string;
};

const EnhancedSectionBackground: VFC<Props> = ({ sectionTitle }) => {
  const sectionTitleToUpperCase: string = sectionTitle.toUpperCase();

  return <SectionBackground sectionTitle={sectionTitleToUpperCase} />;
};

export default EnhancedSectionBackground;
