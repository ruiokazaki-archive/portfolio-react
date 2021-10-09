import { VFC } from 'react';
import SectionWrap from './SectionWrap.style';
import ContentWrap from './ContentWrap';
import SectionBackground from '../../containers/molecules/SectionBackground';
import SectionTitle from '../atoms/SectionTitle';

type Props = {
  sectionTitle: string;
  children: React.ReactNode;
};

const Section: VFC<Props> = ({ sectionTitle, children }) => (
  <SectionWrap>
    <SectionBackground sectionTitle={sectionTitle} />
    <ContentWrap>
      <SectionTitle sectionTitle={sectionTitle} />
      {children}
    </ContentWrap>
  </SectionWrap>
);

export default Section;
