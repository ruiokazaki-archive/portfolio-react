import { VFC, ReactNode } from 'react';
import SectionFirstWrap from 'components/templates/SectionFirstWrap.style';
import SectionFirstTitle from 'components/atoms/SectionFirstTitle';
import ContentWrap from 'components/templates/ContentWrap';

type Props = {
  sectionTitle: string;
  children: ReactNode;
};

const Section: VFC<Props> = ({ sectionTitle, children }) => (
  <SectionFirstWrap id={sectionTitle}>
    <ContentWrap>
      <SectionFirstTitle sectionTitle={sectionTitle} />
      {children}
    </ContentWrap>
  </SectionFirstWrap>
);

export default Section;
