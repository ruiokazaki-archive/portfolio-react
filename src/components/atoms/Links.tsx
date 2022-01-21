import React, { VFC } from 'react';
import { linkType } from 'data/works';
import { GithubLink, OtherLink, Img } from 'components/atoms/Links.style';
import githubIcon from 'assets/svg/github.svg';
import linkIcon from 'assets/svg/link.svg';

type Props = {
  links: linkType[];
  type: 'github' | 'link';
};

const Links: VFC<Props> = ({ links, type }) => (
  <>
    {links.map((link) => (
      <p
        key={link.name}
        style={{
          marginBottom: '16px',
          fontSize: '16px',
        }}
      >
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
