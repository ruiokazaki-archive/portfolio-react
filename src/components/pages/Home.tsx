import { VFC } from 'react';

import About from '../organisms/About';
import Profile from '../../containers/organisms/Profile';
import Works from '../organisms/Works';
import Contact from '../../containers/organisms/Contact';

const Home: VFC = () => (
  <>
    <About />
    <Profile />
    <Works />
    <Contact />
  </>
);

export default Home;
