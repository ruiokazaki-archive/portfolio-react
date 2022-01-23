import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import Typist from 'react-typist';

const LeftContentsStyle = styled.section`
  width: 487px;
  height: fit-content;
`;
export const LeftContents = tw(LeftContentsStyle)`flex flex-col`;

const ProfileNameStyle = styled(Typist)`
  line-height: 49px;
  letter-spacing: 10px;
  font-size: 42px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const ProfileName = tw(ProfileNameStyle)`font-bold order-2`;

const ProfileSchoolStyle = styled(Typist)`
  font-size: 14px;
`;
export const ProfileSchool = tw(ProfileSchoolStyle)`text-gray1 order-1`;

const ProfileIntroductionStyle = styled(Typist)`
  font-size: 14px;
  line-height: 28px;
`;
export const ProfileIntroduction = tw(
  ProfileIntroductionStyle,
)`text-justify order-3`;

const ProfileImageStyle = styled.figure`
  img {
    width: 100%;
    border-radius: 36px;
  }
`;
export const ProfileImage = tw(ProfileImageStyle)`w-full shadow`;

// Right contnests
export const RightContents = styled.div`
  width: 300px;
`;

const LinkWrapStyle = styled.div`
  margin: 10px 15px 0 15px;
`;
export const LinkWrap = tw(LinkWrapStyle)`flex justify-between`;

const LinkStyle = styled.a`
  font-size: 18px;
  line-height: 21px;
`;
export const Link = tw(LinkStyle)`flex items-center text-pink1 shadow`;

const LinkIconStyle = styled.figure`
  margin-right: 5px;
  width: 22px;
  height: 22px;
`;
export const LinkIcon = tw(LinkIconStyle)`flex items-center justify-center`;

const AboutButtonStyle = styled.button`
  height: 62px;
  width: 180px;
  font-size: 22px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  transition: all 0.3s;
  margin: 0 auto;
  &:hover {
    transform: scale(1.1);
  }
`;
export const AboutButton = tw(AboutButtonStyle)`bg-green1 text-white1 block`;
