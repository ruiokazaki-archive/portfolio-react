import SectionTitle from 'components/atoms/SectionTitle';
import Header from 'components/organisms/Header';
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { SubmitButton } from 'components/organisms/Contact.style';
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
} from 'components/organisms/About.style';

// images
import myself from 'assets/images/myself.jpg';
import github from 'assets/svg/github.svg';
import twitter from 'assets/svg/twitter.svg';

const About: VFC = () => (
  <>
    <Header />
    <div
      className="relative"
      style={{
        marginInline: 'auto',
        width: '868px',
        padding: '75px 22px',
        paddingTop: '160px',
      }}
    >
      <SectionTitle sectionTitle="About" />
      <div
        style={{
          minHeight: '100vh',
        }}
        className="text-white1"
      >
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

        <div
          className="absolute"
          style={{
            height: 'calc(100% + 64px)',
            background: '#f858f1',
            width: '2px',
            top: '-64px',
            left: '-2px',
          }}
        />

        <SectionTitle sectionTitle="受賞歴" />
        <p
          style={{
            marginBottom: '32px',
            fontSize: '16px',
            lineHeight: '28px',
          }}
        >
          open hacku 2020 優秀賞 , 若年者銀賞 , 技能五輪銀賞
        </p>
        <SectionTitle sectionTitle="なりたいエンジニア像" />
        <p
          style={{
            marginBottom: '32px',
            fontSize: '16px',
            lineHeight: '28px',
          }}
        >
          自分がどんなエンジニアになりたいか
          <br />
          なぜそんなエンジニアになりたいのか
          <br />
          その為に今何をしているのか
        </p>
        <SectionTitle sectionTitle="仕事に対する姿勢" />
        <p
          style={{
            marginBottom: '32px',
            fontSize: '16px',
            lineHeight: '28px',
          }}
        >
          自分がどんな気持ちで仕事に臨むのか、何を大切にしているのかを記述する
          <br />
          その為に今何をしているのか
        </p>
        <SectionTitle sectionTitle="インターンシップ" />
        <p
          style={{
            marginBottom: '32px',
            fontSize: '16px',
            lineHeight: '28px',
          }}
        >
          インターンで何をしているのか。どういう立場なのか。を説明する
        </p>
        <Link to="/">
          <SubmitButton type="button" style={{ marginTop: '80px' }}>
            HOME
          </SubmitButton>
        </Link>
      </div>
    </div>
  </>
);

export default About;
