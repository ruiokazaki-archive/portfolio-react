import { VFC } from 'react';
import SectionWrap from 'components/templates/SectionWrap';
import Work from 'components/atoms/Work';
import { worksData } from 'data/works';
import WorksWrap from 'components/organisms/Works.style';

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
