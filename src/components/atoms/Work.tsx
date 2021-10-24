import { VFC } from 'react';
import logo from '../../assets/svg/logo_nonst.svg';
import { Tilt, LogoWrap } from './Work.style';
import { WorkDataType } from '../../data/Works';

type Props = {
  workData: WorkDataType;
};

const Work: VFC<Props> = ({ workData }) => (
  <Tilt scale={1.05} perspective={1000}>
    <LogoWrap>
      <img src={logo} alt={`${workData.title}のロゴ`} />
    </LogoWrap>
  </Tilt>
);

export default Work;
