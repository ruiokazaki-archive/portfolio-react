import { VFC, ReactNode } from 'react';
import SectionFirstWrap from './SectionFirstWrap.style';
import SectionFirstTitle from '../atoms/SectionFirstTitle';
import ContentWrap from './ContentWrap';

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
