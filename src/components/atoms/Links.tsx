import React, { VFC } from 'react';
import { linkType } from 'data/works';
import { GithubLink, OtherLink, Img } from 'components/atoms/Links.style';

const githubIcon =
  'https://click.ecc.ac.jp/ecc/rokazaki/rurus_portfolio/svg/Github.svg';
const linkIcon =
  'https://click.ecc.ac.jp/ecc/rokazaki/rurus_portfolio/svg/Link.svg';

type Props = {
  links: linkType[];
  type: 'github' | 'link';
};

const Links: VFC<Props> = ({ links, type }) => (
  <>
    {links.map((link) => (
      <p key={link.name}>
        {type === 'github' ? (
          <GithubLink href={link.url} target="ruru">
            <Img src={githubIcon} alt="githubのアイコン" />
            {link.name} - {link.url}
          </GithubLink>
        ) : (
          <OtherLink href={link.url} target="ruru">
            <Img src={linkIcon} alt="Linkのアイコン" />
            {link.name} - {link.url}
          </OtherLink>
        )}
      </p>
    ))}
  </>
);
export default Links;
