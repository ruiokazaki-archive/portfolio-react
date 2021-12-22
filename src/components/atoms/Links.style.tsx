import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const LinkStyle = styled.a`
  margin-bottom: '16px';
  font-size: '16px';
`;
export const GithubLink = tw(LinkStyle)`flex items-center text-pink1`;
export const OtherLink = tw(LinkStyle)`flex items-center text-green1`;

export const Img = styled.img`
  width: '20px';
  height: '20px';
  display: 'block';
  margin-right: '8px';
`;
