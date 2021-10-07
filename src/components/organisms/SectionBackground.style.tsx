import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const BackgroundWrap = tw.div`
  w-full
  h-full
  font-bold
  overflow-hidden
`;

const BackgroundTextStyle = styled.p`
  transform: rotate(-30deg);
  -webkit-text-stroke: 1px $gray1;
  opacity: 0.3;
  z-index: -1;
  font-size: 550px;
`;

export const BackgroundText = tw(BackgroundTextStyle)`
  text-center
`;
