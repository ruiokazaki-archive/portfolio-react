import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const SectionLastWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const SectionLastWrap = tw(SectionLastWrapStyle)`relative background`;
export default SectionLastWrap;
