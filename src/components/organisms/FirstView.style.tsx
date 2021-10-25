import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import Typist from 'react-typist';

export const Title = styled(Typist)`
  font-size: 48px;
  line-height: 68px;
  margin-top: 30px;
  font-weight: bold;
`;

const SubTitleStyle = styled(Typist)`
  font-size: 24px;
  margin-top: 35px;
  font-weight: bold;
`;

export const SubTitle = tw(SubTitleStyle)`text-gray1`;
