import { VFC } from 'react';
import About from '../organisms/About';
import Profile from '../../containers/organisms/Profile';
import Contact from '../organisms/Contact';

const Home: VFC = () => (
  <>
    <About />
    <Profile />
    <Contact />
  </>
);

export default Home;
