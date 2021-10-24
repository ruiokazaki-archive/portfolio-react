import { VFC } from 'react';
import SectionWrap from '../templates/SectionWrap';
import Work from '../atoms/Work';

const About: VFC = () => (
  <SectionWrap sectionTitle="Works">
    <Work />
  </SectionWrap>
);

export default About;
