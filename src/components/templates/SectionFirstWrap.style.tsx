import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const SectionLastWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & > div {
    height: 40vh;
  }
`;

const SectionLastWrap = tw(SectionLastWrapStyle)`relative background`;
export default SectionLastWrap;
