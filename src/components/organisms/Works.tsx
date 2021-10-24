import { VFC } from 'react';
import SectionWrap from '../templates/SectionWrap';
import Work from '../atoms/Work';
import { worksData } from '../../data/Works';
import WorksWrap from './Works.style';

const Works: VFC = () => (
  <SectionWrap sectionTitle="Works">
    <WorksWrap>
      {worksData.map((work) => (
        <Work key={work.id} workData={work} />
      ))}
    </WorksWrap>
  </SectionWrap>
);

export default Works;
