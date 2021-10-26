import TiltEl from 'react-parallax-tilt';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const TiltStyle = styled(TiltEl)`
  width: 320px;
  height: 180px;
  transform-style: preserve-3d;
  background: #f2f2f2;
  border-radius: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
export const Tilt = tw(TiltStyle)`work`;

export const LogoWrap = styled.figure`
  transform: translateZ(50px);
`;
