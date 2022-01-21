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
} from 'components/organisms/About.style';
import SectionWrap from 'components/templates/SectionWrap';

// images
import myself from 'assets/images/myself.jpg';
import github from 'assets/svg/github.svg';
import twitter from 'assets/svg/twitter.svg';

const About: VFC = () => (
  <SectionWrap sectionTitle="About">
    <div className="flex items-center justify-between">
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
            私は、継続力に自信があります。
            <br />
            この強みは、専門学校に入り、最も発揮することが出来ました。
            <br />
            専門学校入学当初、プログラミング経験がなく全く出来ませんでしたが、苦手を克服するために毎日勉強した結果、苦手を克服しクラスで一番できるようになりました。
            <br />
            今では、技術向上を目標に日々学習したことを誰でも見れる場所にアウトプットし、発信しています。
            <br />
            アウトプットした情報に反応を貰えるとモチベーションが向上し、より継続することが出来ます。
            <br />
            この継続力はどの職場でも発揮することができる力だと思っています。
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
              <img src={twitter} alt="岡崎流依のinstagram" />
            </LinkIcon>
            yoruhanemutaiyo
          </Link>
        </LinkWrap>
      </RightContents>
    </div>
  </SectionWrap>
);

export default About;
