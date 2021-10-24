import { VFC, ReactNode } from 'react';
import SectionLastWrap from './SectionLastWrap.style';
import ContentWrap from './ContentWrap';
import SectionBackground from '../../containers/molecules/SectionBackground';
import SectionTitle from '../atoms/SectionTitle';

type Props = {
  sectionTitle: string;
  children: ReactNode;
};

const Section: VFC<Props> = ({ sectionTitle, children }) => (
  <SectionLastWrap>
    <SectionBackground sectionTitle={sectionTitle} />
    <ContentWrap>
      <SectionTitle sectionTitle={sectionTitle} />
      {children}
    </ContentWrap>
  </SectionLastWrap>
);

export default Section;