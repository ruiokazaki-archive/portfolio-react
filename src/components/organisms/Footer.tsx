import { VFC } from 'react';
import {
  FooterWrap,
  FooterContents,
  CopyLight,
  SnsWrap,
  SnsImg,
} from 'components/organisms/Footer.style';

const github =
  'https://click.ecc.ac.jp/ecc/rokazaki/rurus_portfolio/svg/Github.svg';
const instagram =
  'https://click.ecc.ac.jp/ecc/rokazaki/rurus_portfolio/svg/Instagram.svg';
const twitter =
  'https://click.ecc.ac.jp/ecc/rokazaki/rurus_portfolio/svg/Twitter.svg';

const Footer: VFC = () => (
  <FooterWrap>
    <FooterContents>
      <CopyLight>
        <small>&copy; 2021 RUI OKAZAKI</small>
      </CopyLight>
      <SnsWrap>
        <a href="https://github.com/OkazakiRui" target="ruru">
          <SnsImg src={github} alt="岡崎流依のgithub" />
        </a>
        <a href="https://instagram.com/asahanemutaiyo/" target="ruru">
          <SnsImg src={instagram} alt="岡崎流依のinstagram" />
        </a>
        <a href="https://twitter.com/yoruhanemutaiyo" target="ruru">
          <SnsImg src={twitter} alt="岡崎流依のtwitter" />
        </a>
      </SnsWrap>
    </FooterContents>
  </FooterWrap>
);

export default Footer;
