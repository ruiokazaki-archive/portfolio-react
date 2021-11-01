import { VFC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { worksData } from '../../data/works';

import Header from '../organisms/Header';

const Work: VFC = () => {
  const { workId } = useParams();
  const worksId: number[] = [];

  worksData.forEach((work) => worksId.push(work.id));

  if (worksId.includes(Number(workId))) {
    // const { title, concept } = worksData[Number(workId) - 1];

    return (
      <>
        <Header />
        <div
          style={{
            minHeight: '100vh',
            paddingTop: '64px',
          }}
          className="text-white1 flex"
        >
          <div className="w-6/12">左</div>
          <div className="w-6/12">右</div>
        </div>
      </>
    );
  }

  return <Navigate to="/" replace />;
};

export default Work;
