import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const BackgroundWrapStyle = styled.div`
  &:before {
    content: '';
    display: block;
    margin-right: 870px;
    position: absolute;
    border-left: 2px solid #f858f1;
    z-index: 10;
    height: 100%;
  }
`;

export const BackgroundWrap = tw(BackgroundWrapStyle)`
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
`;

export const BackgroundText = tw(BackgroundTextStyle)`
  text-center
`;
