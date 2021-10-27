import { VFC } from 'react';
import { Tilt, LogoWrap } from './Work.style';
import { WorkDataType } from '../../data/works';

type Props = {
  workData: WorkDataType;
};

const Work: VFC<Props> = ({ workData }) => (
  <Tilt scale={1.05} perspective={1000}>
    <LogoWrap>
      <img src={workData.logo} alt={`${workData.title}のロゴ`} />
    </LogoWrap>
  </Tilt>
);

export default Work;
