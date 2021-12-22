import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ImgStyle = styled.img`
  aspect-ratio: '16 / 9';
  object-fit: 'cover';
`;
const Img = tw(ImgStyle)`w-full block`;

export default Img;
