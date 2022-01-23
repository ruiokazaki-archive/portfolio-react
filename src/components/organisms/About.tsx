import { VFC } from 'react';

import {
  LeftContents,
  RightContents,
  ProfileName,
  ProfileSchool,
  ProfileIntroduction,
  ProfileImage,
  LinkWrap,
  Link,
  LinkIcon,
  AboutButton,
} from 'components/organisms/About.style';
import SectionWrap from 'components/templates/SectionWrap';

// images
import myself from 'assets/images/myself.jpg';
import github from 'assets/svg/github.svg';
import twitter from 'assets/svg/twitter.svg';

type Props = {
  handleClick: () => void;
};

const About: VFC<Props> = ({ handleClick }) => (
  <SectionWrap sectionTitle="About">
    <div className="flex justify-between mb-24">
      <LeftContents>
        <ProfileName
          startDelay={2500}
          avgTypingDelay={30}
          cursor={{ show: false }}
        >
          <h3>RUI OKAZAKI</h3>
        </ProfileName>
        <ProfileSchool
          startDelay={1000}
          avgTypingDelay={30}
          cursor={{ show: false }}
        >
          <p>ECCコンピュータ専門学校23年卒予定 WEBデザイナー専攻2年</p>
        </ProfileSchool>
        <ProfileIntroduction
          startDelay={3500}
          avgTypingDelay={30}
          cursor={{ show: false }}
        >
          <p>
            2002年2月6日 兵庫県出身
            <br />
            現在はフロント領域を中心に勉強しており、最近は作れるものの幅を広げる為にフロントと関わりのある技術も勉強しています。
            <br />
            将来はチームのリードエンジニアとして人を引っ張っていけるようになりたいです。
          </p>
        </ProfileIntroduction>
      </LeftContents>
      <RightContents>
        <ProfileImage>
          <img src={myself} alt="岡崎流依の写真" />
        </ProfileImage>
        <LinkWrap>
          <Link href="https://github.com/OkazakiRui" target="ruru">
            <LinkIcon>
              <img src={github} alt="岡崎流依のgithub" />
            </LinkIcon>
            OkazakiRui
          </Link>
          <Link href="https://twitter.com/yoruhanemutaiyo" target="ruru">
            <LinkIcon>
              <img src={twitter} alt="岡崎流依のTwitter" />
            </LinkIcon>
            yoruhanemutaiyo
          </Link>
        </LinkWrap>
      </RightContents>
    </div>
    <AboutButton onClick={handleClick}>SEE MORE</AboutButton>
  </SectionWrap>
);

export default About;
