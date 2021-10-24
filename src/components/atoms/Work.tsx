import { VFC } from 'react';
import logo from '../../assets/svg/logo_nonst.svg';

const Work: VFC = () => (
  <div className="work" data-tilt data-tilt-scale="1.05">
    <figure>
      <img src={logo} alt="作品" />
    </figure>
  </div>
);

export default Work;
