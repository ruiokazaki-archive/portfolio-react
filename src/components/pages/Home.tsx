import { VFC } from 'react';
import SectionWrap from '../templates/SectionWrap';
import SectionBackground from '../../containers/molecules/SectionBackground';

const Home: VFC = () => (
  <SectionWrap>
    <SectionBackground sectionTitle="maincontents" />
  </SectionWrap>
);

export default Home;
