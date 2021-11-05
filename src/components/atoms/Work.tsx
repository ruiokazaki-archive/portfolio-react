import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { Tilt, LogoWrap } from './Work.style';
import { WorkDataType } from '../../data/works';

type Props = {
  workData: WorkDataType;
};

const Work: VFC<Props> = ({ workData }) => (
  <Link to={`works/${workData.id}`}>
    <Tilt scale={1.05} perspective={1000}>
      <LogoWrap>
        <img src={workData.logo} alt={`${workData.title}のロゴ`} />
      </LogoWrap>
    </Tilt>
  </Link>
);
export default Work;
