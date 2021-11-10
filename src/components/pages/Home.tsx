import { VFC } from 'react';

import Header from 'components/organisms/Header';
import FirstView from 'components/organisms/FirstView';
import About from 'components/organisms/About';
import Works from 'components/organisms/Works';
import Footer from 'components/organisms/Footer';
import Profile from 'containers/organisms/Profile';
import Contact from 'containers/organisms/Contact';

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
