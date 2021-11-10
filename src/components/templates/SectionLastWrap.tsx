import { VFC, ReactNode } from 'react';
import SectionLastWrap from 'components/templates/SectionLastWrap.style';
import ContentWrap from 'components/templates/ContentWrap';
import SectionBackground from 'containers/molecules/SectionBackground';
import SectionTitle from 'components/atoms/SectionTitle';

type Props = {
  sectionTitle: string;
  children: ReactNode;
};

const Section: VFC<Props> = ({ sectionTitle, children }) => (
  <SectionLastWrap id={sectionTitle}>
    <SectionBackground sectionTitle={sectionTitle} />
    <ContentWrap>
      <SectionTitle sectionTitle={sectionTitle} />
      {children}
    </ContentWrap>
  </SectionLastWrap>
);

export default Section;
