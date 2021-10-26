import { VFC } from 'react';
import SectionWrap from '../templates/SectionWrap';
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
} from './About.style';

// images
import myself from '../../assets/images/myself.jpg';
import github from '../../assets/svg/github.svg';
import instagram from '../../assets/svg/instagram.svg';

const About: VFC = () => (
  <SectionWrap sectionTitle="About">
    <div className="flex items-center justify-between">
      <LeftContents>
        <ProfileName
          startDelay={2500}
          avgTypingDelay={30}
          cursor={{ show: false }}
        >
          RUI OKAZAKI
        </ProfileName>
        <ProfileSchool
          startDelay={1000}
          avgTypingDelay={30}
          cursor={{ show: false }}
        >
          ECCコンピュータ専門学校 WEBデザイナー専攻2年
        </ProfileSchool>
        <ProfileIntroduction
          startDelay={3500}
          avgTypingDelay={30}
          cursor={{ show: false }}
        >
          私は人を笑顔にする事と教える事が好きです。
          <br />
          専門学校に入り友人にプログラミングを教えたことがあります。
          <br />
          プログラムが嫌いな友人が自分自身の力で出来るようになるたびに笑顔になってくれました。
          <br />
          私も周りの人もそんな友人を見て、笑顔になり幸せな気持ちになったのでプログラミングにはそれだけの価値や力があるのだと確信しました。
          <br />
          私は将来好きなプログラミングに関わりながらも、周りが笑顔になるように働きたいと考えています。
          <br />
          「一緒に働く人はもちろん、作成したものを使ってくれる人まで良い気分で居ることが出来る」
          <br />
          そんな人の気持ちを汲み取れるエンジニアを目指しています！！
        </ProfileIntroduction>
      </LeftContents>
      <RightContents>
        <ProfileImage>
          <img src={myself} alt="岡崎流依の写真" />
        </ProfileImage>
        <LinkWrap>
          <Link href="https://github.com/OkazakiRui" target="ruru">
            <LinkIcon>
              <img src={github} alt="github" />
            </LinkIcon>
            OkazakiRui
          </Link>
          <Link href="https://www.instagram.com/asahanemutaiyo/" target="ruru">
            <LinkIcon>
              <img src={instagram} alt="instagram" />
            </LinkIcon>
            asahanemutaiyo
          </Link>
        </LinkWrap>
      </RightContents>
    </div>
  </SectionWrap>
);

export default About;
