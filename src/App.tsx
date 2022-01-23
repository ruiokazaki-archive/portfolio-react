/* eslint-disable */
import { VFC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import { cursor } from 'script/mouse';

import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Work from 'components/pages/Work';

const App: VFC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  useEffect(() => {
    cursor.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works/:workId" element={<Work />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
