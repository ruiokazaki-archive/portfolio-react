import { VFC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import Home from 'components/pages/Home';

const App: VFC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="works" element={<Works />}>
          <Route path=":workId" element={<Work />} />
        </Route> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
