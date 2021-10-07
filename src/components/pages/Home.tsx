import { VFC } from 'react';
import SectionWrap from './SectionWrap';
import SectionBackground from '../../containers/organisms/SectionBackground';

const Home: VFC = () => (
  <SectionWrap>
    <SectionBackground sectionTitle="maincontents" />
  </SectionWrap>
);

export default Home;
