import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const BackgroundWrap = tw.div`
  flex
  items-center
  justify-center
  w-full
  h-full
  font-bold
  overflow-hidden
  absolute
`;

const BackgroundTextStyle = styled.p`
  -webkit-text-stroke: 1px gray;
  opacity: 0.3;
  font-size: 550px;
  transform: rotate(-30deg);
  cursor: default;
`;

export const BackgroundText = tw(BackgroundTextStyle)`
  text-center
`;
