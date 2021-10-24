import { VFC, ReactNode } from 'react';
import SectionFirstWrap from './SectionFirstWrap.style';
import ContentWrap from './ContentWrap';
import SectionBackground from '../../containers/molecules/SectionBackground';
import SectionTitle from '../atoms/SectionTitle';

type Props = {
  sectionTitle: string;
  children: ReactNode;
};

const Section: VFC<Props> = ({ sectionTitle, children }) => (
  <SectionFirstWrap>
    <SectionBackground sectionTitle={sectionTitle} />
    <ContentWrap>
      <SectionTitle sectionTitle={sectionTitle} />
      {children}
    </ContentWrap>
  </SectionFirstWrap>
);

export default Section;
