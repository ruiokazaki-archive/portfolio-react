import SectionTitle from 'components/atoms/SectionTitle';
import Header from 'components/organisms/Header';
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { SubmitButton } from 'components/organisms/Contact.style';
import {
  LeftContents,
  RightContents,
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
        paddingTop: '80px',
      }}
    >
      <SectionTitle sectionTitle="About" />
      <div
        style={{
          minHeight: '100vh',
        }}
        className="text-white1"
      >
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
        {/* index about */}
        <div className="flex justify-between items-center mb-24">
          <LeftContents>
            <h3
              style={{
                lineHeight: '49px',
                letterSpacing: '10px',
                fontSize: '42px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
              className="font-bold order-2"
            >
              RUI OKAZAKI
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '28px',
              }}
              className="text-gray1 order-1"
            >
              ECCコンピュータ専門学校23年卒予定 WEBデザイナー専攻2年
            </p>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '28px',
              }}
              className="text-justify order-3"
            >
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
        {/* index about END */}

        <SectionTitle sectionTitle="受賞歴" />
        <p
          style={{
            marginBottom: '32px',
            fontSize: '16px',
            lineHeight: '28px',
          }}
          className="flex flex-col gap-2"
        >
          <a
            href="https://www.javada.or.jp/jigyou/gino/zenkoku/n_59/kadai/39.html"
            className="border-b-2 block"
            style={{ width: 'fit-content' }}
            target="ruru"
          >
            2021年度開催 第59回技能五輪全国大会 ウェブデザイン職種 銀賞
          </a>
          <a
            href="https://www.javada.or.jp/jyakunen20/16/kadai/11.html"
            className="border-b-2 block"
            style={{ width: 'fit-content' }}
            target="ruru"
          >
            2021年度開催 第16回若年者ものづくり競技大会 ウェブデザイン職種 銀賞
          </a>
          <a
            href="https://hacku.yahoo.co.jp/hacku2020online3/"
            className="border-b-2 block"
            style={{ width: 'fit-content' }}
            target="ruru"
          >
            2020年度開催 Yahoo! Open Hack U 2020 Online Vol.3 優秀賞
          </a>
        </p>
        <SectionTitle sectionTitle="インターンシップ" />
        <p
          style={{
            marginBottom: '32px',
            fontSize: '16px',
            lineHeight: '28px',
          }}
        >
          2021年10月から 株式会社inprog
          にてフロントエンドエンジニアとして長期インターンしています。
          <br />
          Nextjs, TypeScript, hasura, GraphQL, Git
          を使用しwebアプリを作成しています。
          <br />
          エンジニアが私含め2人でフロントエンド部分をほぼ1人で開発しています。
        </p>
        <SectionTitle sectionTitle="現在していること" />
        <p
          style={{
            marginBottom: '32px',
            fontSize: '16px',
            lineHeight: '28px',
          }}
        >
          現在は校内アプリが使いにくいので、学生のための校内アプリを作成中です。
          <br />
          スクレイピングで校内のアプリのデータを取得しRESTFul
          apiを作成しました。
          <br />
          卒業までに、webのPWA版 ios版 android版をリリースする予定です。
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
