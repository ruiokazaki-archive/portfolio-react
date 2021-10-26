import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const HeaderWrapStyle = styled.header`
  z-index: 100000;
  padding: 0 30px;
  height: 64px;
`;
const HeaderWrap = tw(
  HeaderWrapStyle,
)`fixed top-0 left-0 flex justify-between items-center w-full font-bold`;
export default HeaderWrap;
