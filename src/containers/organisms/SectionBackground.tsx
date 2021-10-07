import { VFC } from 'react';
import SectionBackground from '../../components/organisms/SectionBackground';

type Props = {
  sectionTitle: string;
};

const EnhancedSectionBackground: VFC<Props> = ({ sectionTitle }) => {
  const sectionTitleToUpperCase: string = sectionTitle.toUpperCase();

  return <SectionBackground sectionTitle={sectionTitleToUpperCase} />;
};

export default EnhancedSectionBackground;
