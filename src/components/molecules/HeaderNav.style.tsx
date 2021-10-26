import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const UlStyle = styled.ul`
  font-size: 22px;
  gap: 20px;
`;
export const Ul = tw(UlStyle)`text-gray1 flex justify-between items-center `;

export const Li = styled.li`
  transition: all 0.3s;
  &:hover {
    color: #f2f2f2;
    opacity: 0.75;
  }
`;
