import { VFC } from 'react';
import SectionWrap from '../templates/SectionWrap';
import ContentWrap from '../templates/ContentWrap';
import SectionBackground from '../../containers/molecules/SectionBackground';
import SectionTitle from '../atoms/SectionTitle';

const Home: VFC = () => (
  <SectionWrap>
    <SectionBackground sectionTitle="MainContents" />
    <ContentWrap>
      <SectionTitle sectionTitle="MainContents" />
      <p>てすとてきすと</p>
    </ContentWrap>
  </SectionWrap>
);

export default Home;
