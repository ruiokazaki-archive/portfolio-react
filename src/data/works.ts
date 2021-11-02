import InnerPeaceCafe from '../assets/svg/logo_IPC.svg';
import nomino from '../assets/svg/logo_nomino.svg';
import tappiness from '../assets/svg/logo_tappiness.svg';
import Spark from '../assets/svg/logo_spark.svg';
import portfolio from '../assets/svg/logo_portfolio.svg';
import ECC from '../assets/svg/logo_ECC.svg';
import Fribo from '../assets/svg/logo_Fribo.svg';
import nonst from '../assets/svg/logo_nonst.svg';
import InnerPeaceCafeImg from '../assets/images/IPC_screen.jpg';
import nominoImg from '../assets/images/nomino_screen.jpg';
import tappinessImg from '../assets/images/tappiness_screen.jpg';
import SparkImg from '../assets/images/spark_screen.jpg';
import portfolioImg from '../assets/images/portfolio_screen.jpg';
import ECCImg from '../assets/images/ECC-LP_screen.jpg';
import FriboImg from '../assets/images/Fribo_screen.jpg';
import nonstImg from '../assets/images/nonst_screen.jpg';

export type WorkDataType = {
  id: number;
  title: string;
  description: string;
  impressions: string;
  position: string;
  programmingLanguages: string;
  toolsUsed: string;
  teamProduction: 0 | 1;
  usetime: number;
  season: string;
  githubLink: string;
  productionLink: string;
  img: string;
  logo: string;
};

export const worksData: WorkDataType[] = [
  {
    id: 1,
    title: 'InnerPeaceCafe',
    description:
      'InnerPeaceCafeは女子大生の悩みである肌トラブルを解決するために作られたカフェです。一人一人に寄り添いその人にあったメニューを提供することが出来ます。',
    impressions: 'HTML, CSSを勉強し、初めて作成したwebサイトです。',
    teamProduction: 0,
    position: 'Planning, Design, FrontEnd',
    usetime: 60,
    season: '1年前期',
    programmingLanguages: 'Photoshop, Illustrator, XD, HTML5, SCSS, JavaScript',
    toolsUsed: 'Photoshop, Illustrator, XD, HTML5, SCSS, JavaScript',
    githubLink: 'https://github.com/OkazakiRui/InnerPeaceCafe',
    productionLink:
      'https://click.ecc.ac.jp/ecc/rokazaki/works/InnerPeaceCafe/',
    img: InnerPeaceCafeImg,
    logo: InnerPeaceCafe,
  },
  {
    id: 2,
    title: 'nomino',
    description:
      'nominoは売り手の手間を最小限にした。面倒臭いがないフリマアプリです。買い手がすぐ見つかり従来のフリマアプリとは違いスピーディーな取引が可能です。',
    impressions:
      'vuejsの勉強のために作成した初めてのスマートフォン向けwebアプリケーションです。',
    teamProduction: 0,
    position: 'Planning, Design, FrontEnd',
    usetime: 16,
    season: '1年後期',
    programmingLanguages:
      'Photoshop, Illustrator, Figma, HTML5, SCSS, JavaScript, Vuejs',
    toolsUsed: 'Photoshop, Illustrator, Figma, HTML5, SCSS, JavaScript, Vuejs',
    githubLink: 'https://github.com/OkazakiRui/nomino',
    productionLink: 'https://click.ecc.ac.jp/ecc/rokazaki/works/nomino/',
    img: nominoImg,
    logo: nomino,
  },
  {
    id: 3,
    title: 'たっぴねす',
    description:
      'たっぴねすはやる気がでない人がやる気を出すためのwebアプリです。<br />目標達成ができない人に達成しないと欲しいものが手に入らないようにすることで普段頑張れない人も頑張ることが出来ます。',
    impressions:
      '初めてのチーム制作でした。チームで動くことの難しさを身をもって体験しました。',
    teamProduction: 1,
    position: 'Planning, FrontEnd',
    usetime: 30,
    season: '1年後期',
    programmingLanguages: 'HTML5, CSS3, Sass, javaScript, Vuejs',
    toolsUsed: 'HTML5, CSS3, Sass, javaScript, Vuejs',
    githubLink: 'https://github.com/OkazakiRui/tappiness',
    productionLink: 'https://click.ecc.ac.jp/ecc/rokazaki/works/tappiness/',
    img: tappinessImg,
    logo: tappiness,
  },
  {
    id: 4,
    title: 'Spark',
    description:
      'Sparkはビジネスではなく、オンライン呑み会などカジュアルにビデオ通話をするための新しいツールです。無言が続くと画面にエフェクトが起こったり、豊富なスタンプが特徴的です。',
    impressions:
      'Yahoo!さん主催のハッカソン、OpenHackU2020 Volume3で作成し、優秀賞を頂きました。',
    teamProduction: 1,
    position: 'Planning, FrontEnd',
    usetime: 30,
    season: '1年後期',
    programmingLanguages: 'Pug, SCSS, JavaScript, gulp',
    toolsUsed: 'Pug, SCSS, JavaScript, gulp',
    githubLink: 'https://github.com/OkazakiRui/spark',
    productionLink: 'https://click.ecc.ac.jp/ecc/rokazaki/works/spark/',
    img: SparkImg,
    logo: Spark,
  },
  {
    id: 5,
    title: 'portfolio',
    description:
      '自分の将来したいことや、今まで作った作品をまとめたwebサイトを作成しました。',
    impressions:
      '黒とピンクが好きなので、黒とピンクを基調にしたデザインに仕上げました。<br />現在 vuejs から react + typescript へ移行中です。',
    teamProduction: 0,
    position: 'Planning, Design, FrontEnd',
    usetime: 70,
    season: '1年後期',
    programmingLanguages: 'Vuejs',
    toolsUsed: 'Vuejs',
    githubLink: 'https://github.com/OkazakiRui/portfolio_v1',
    productionLink: 'https://click.ecc.ac.jp/ecc/rokazaki/',
    img: portfolioImg,
    logo: portfolio,
  },
  {
    id: 6,
    title: 'ECC学生アプリ',
    description:
      '現在apple storeにあるECC学生アプリは学生の間で使いにくいと評判があり、学校側も学生が通知欄を見ないので困っています。<br />そこで、ECC学生アプリを本来の機能とプラスして使いやすい機能を搭載して実装することで学生が使い続けたくなるアプリを作成したいと考えました。',
    impressions:
      'apiの作り方やスクレイピングについて学ぶことが出来ました。<br />現在アプリは開発中です。後期公開予定',
    teamProduction: 1,
    position: 'Planning, FrontEnd',
    usetime: 20,
    season: '2年前期',
    programmingLanguages: 'HTML5, CSS3, Sass, Docker, Laravel, Vue',
    toolsUsed: 'HTML5, CSS3, Sass, Docker, Laravel, Vue',
    githubLink: 'https://github.com/OkazakiRui/spark',
    productionLink: 'https://click.ecc.ac.jp/ecc/rokazaki/works/ECCApp-LP/',
    img: ECCImg,
    logo: ECC,
  },
  {
    id: 7,
    title: 'Fribo',
    description:
      '女性または一人暮らしの方の悩みである、夜道が怖い。を解決するために作られたwebアプリです。',
    impressions:
      'firebaseを初めて使い、PWAにも初めてしたので、初めてづくしでとても勉強になった',
    teamProduction: 1,
    position: 'Planning, FrontEnd, BackEnd',
    usetime: 40,
    season: '2年前期',
    programmingLanguages: 'Vuejs, Firebase',
    toolsUsed: 'Vuejs, Firebase',
    githubLink: 'https://github.com/OkazakiRui/Fribo',
    productionLink: 'https://click.ecc.ac.jp/ecc/rokazaki/works/fribo/',
    img: FriboImg,
    logo: Fribo,
  },
  {
    id: 8,
    title: 'nonst',
    description:
      '社会人になってストレスが溜まり、中高の友達とも疎遠になっていて愚痴る相手が居ない。を解決するマッチングアプリです。',
    impressions:
      '10日間のチーム制作でどれだけのものが作れるかを知る良い機会だった。<br />ファイル構造を意識したり、トークンの自動延長などを初めてしてとても良い勉強になった。',
    teamProduction: 1,
    position: 'Planning, FrontEnd, BackEnd',
    usetime: 30,
    season: '2年前期',
    programmingLanguages: 'Vuejs, Firebase',
    toolsUsed: 'Vuejs, Firebase',
    githubLink: 'https://github.com/OkazakiRui/nonst',
    productionLink: 'https://click.ecc.ac.jp/ecc/rokazaki/works/nonst-app/',
    img: nonstImg,
    logo: nonst,
  },
];
