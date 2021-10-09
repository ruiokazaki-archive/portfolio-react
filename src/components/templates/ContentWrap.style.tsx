import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ContentWrapStyle = styled.div`
  width: 868px;
  padding: 75px 22px;
  &:before {
    content: '';
    display: block;
    width: 2px;
    position: absolute;
    background-color: #f858f1;
    top: 0;
    left: -2px;
    z-index: 2;
    height: 100%;
  }
`;
const ContentWrap = tw(ContentWrapStyle)`mx-auto relative`;
export default ContentWrap;
