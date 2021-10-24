import { VFC } from 'react';

import FirstView from '../organisms/FirstView';
import About from '../organisms/About';
import Profile from '../../containers/organisms/Profile';
import Works from '../organisms/Works';
import Contact from '../../containers/organisms/Contact';

const Home: VFC = () => (
  <>
    <FirstView />
    <About />
    <Profile />
    <Works />
    <Contact />
  </>
);

export default Home;
