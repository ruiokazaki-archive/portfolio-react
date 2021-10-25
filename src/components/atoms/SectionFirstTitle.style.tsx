import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const SectionFirstTitleStyle = styled.h2`
  font-size: 18px;
  margin-bottom: 30px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 9;
    left: -28px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border: 2px solid #f858f1;
    border-radius: 50%;
  }
  &:after {
    left: -24px;
    top: 17px;
    content: '';
    display: block;
    margin-right: 870px;
    position: absolute;
    border-left: 2px solid #f858f1;
    z-index: 10;
    height: 70vh;
  }
`;
const SectionFirstTitle = tw(SectionFirstTitleStyle)`
  font-normal relative text-pink1
`;

export default SectionFirstTitle;
