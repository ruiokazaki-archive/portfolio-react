import { VFC, ReactNode } from 'react';
import SectionWrap from 'components/templates/SectionWrap.style';
import ContentWrap from 'components/templates/ContentWrap';
import SectionBackground from 'containers/molecules/SectionBackground';
import SectionTitle from 'components/atoms/SectionTitle';

type Props = {
  sectionTitle: string;
  children: ReactNode;
};

const Section: VFC<Props> = ({ sectionTitle, children }) => (
  <SectionWrap id={sectionTitle}>
    <SectionBackground sectionTitle={sectionTitle} />
    <ContentWrap>
      <SectionTitle sectionTitle={sectionTitle} />
      {children}
    </ContentWrap>
  </SectionWrap>
);

export default Section;
