import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const FooterWrapStyle = styled.footer`
  width: 868px;
  margin: 0 auto;
`;
export const FooterWrap = tw(FooterWrapStyle)`relative`;

export const FooterContents = tw.div`font-mono`;

const CopyLightStyle = styled.p`
  bottom: 8px;
  left: 8px;
`;
export const CopyLight = tw(CopyLightStyle)`absolute text-gray1`;

const SnsWrapStyle = styled.div`
  bottom: 8px;
  gap: 20px;
  width: max-content;
  left: 50%;
  transform: translateX(-50%);
`;
export const SnsWrap = tw(SnsWrapStyle)`absolute flex`;

export const SnsImg = styled.img`
  width: 22px;
  height: 22px;
`;
