import { VFC } from 'react';

import {
  LeftContents,
  RightContents,
  ProfileName,
  ProfileSchool,
  ProfileIntroduction,
  ProfileImage,
  LinkWrap,
  LinkTag,
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
    <div className="flex justify-between items-center mb-24">
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
            私は継続力と好奇心があります。
            <br />
            専門学校入学当初、プログラミング経験がなく全く出来ませんでしたが、苦手を克服するために毎日勉強した結果、苦手を克服し勉強し1年半が経過した頃力試しで出場した全国大会2回銀賞を頂くことができました。
            <br />
            そして今では自分の作りたいものが形できるプログラミングが好きになりました。
            <br />
            現在はフロント領域を中心に勉強しており、最近は作れるものの幅を広げる為にフロントと関わりのある技術も勉強しています。
            <br />
            そして、学習したことで小さなアプリ等を作成し、誰でも見れる場所にアウトプットし発信しています。
            <br />
            アウトプットした情報に反応が貰えるとモチベーションが向上し、より継続することが出来ます。
            <br />
            この継続力と好奇心はどの職場でも発揮することができる力だと思っています。
          </p>
        </ProfileIntroduction>
      </LeftContents>
      <RightContents>
        <ProfileImage>
          <img src={myself} alt="岡崎流依の写真" />
        </ProfileImage>
        <LinkWrap>
          <LinkTag href="https://github.com/OkazakiRui" target="ruru">
            <LinkIcon>
              <img src={github} alt="岡崎流依のgithub" />
            </LinkIcon>
            OkazakiRui
          </LinkTag>
          <LinkTag href="https://twitter.com/yoruhanemutaiyo" target="ruru">
            <LinkIcon>
              <img src={twitter} alt="岡崎流依のTwitter" />
            </LinkIcon>
            yoruhanemutaiyo
          </LinkTag>
        </LinkWrap>
      </RightContents>
    </div>
    <AboutButton onClick={handleClick}>SEE MORE</AboutButton>
  </SectionWrap>
);

export default About;
