import { VFC } from 'react';

import Header from '../organisms/Header';
import FirstView from '../organisms/FirstView';
import About from '../organisms/About';
import Profile from '../../containers/organisms/Profile';
import Works from '../organisms/Works';
import Contact from '../../containers/organisms/Contact';
import Footer from '../organisms/Footer';

const Home: VFC = () => (
  <>
    <Header />
    <FirstView />
    <About />
    <Profile />
    <Works />
    <Contact />
    <Footer />
  </>
);

export default Home;
