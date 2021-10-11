import { VFC } from 'react';
import About from '../organisms/About';
import Profile from '../organisms/Profile';

import { ProfileData } from '../../data/ProfileSkillCode';

const Home: VFC = () => (
  <>
    <About />
    <Profile profileData={ProfileData} />
  </>
);

export default Home;
