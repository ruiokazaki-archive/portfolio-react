import { VFC } from 'react';
import Img from 'components/atoms/WorkScreenImg.style';

type Props = {
  imgSrc: string;
  imgTitle: string;
};

const WorkScreenImg: VFC<Props> = ({ imgSrc, imgTitle }) => (
  <figure>
    <img
      src={imgSrc}
      alt={imgTitle}
      style={{
        aspectRatio: '16 / 9',
        objectFit: 'cover',
        width: '100%',
        display: 'block',
      }}
    />
  </figure>
);
export default WorkScreenImg;
