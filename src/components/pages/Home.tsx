import { VFC } from 'react';
import SectionWrap from '../templates/SectionWrap';
import ContentWrap from '../templates/ContentWrap';
import SectionBackground from '../../containers/molecules/SectionBackground';

const Home: VFC = () => (
  <SectionWrap>
    <SectionBackground sectionTitle="maincontents" />
    <ContentWrap>
      <h1>てすと</h1>
      <p>てすとてきすと</p>
    </ContentWrap>
  </SectionWrap>
);

export default Home;
