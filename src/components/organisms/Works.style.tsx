import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const WorksWrapStyle = styled.div`
  gap: 60px;
  padding: 50px 60px;
`;
const WorksWrap = tw(WorksWrapStyle)`flex flex-wrap`;

export default WorksWrap;
