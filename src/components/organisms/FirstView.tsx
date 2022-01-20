import { VFC } from 'react';
import { Title, SubTitle } from 'components/organisms/FirstView.style';
import SectionFirstWrap from 'components/templates/SectionFirstWrap';

const FirstView: VFC = () => (
  <SectionFirstWrap sectionTitle="Start">
    <Title startDelay={500} avgTypingDelay={40} cursor={{ show: false }}>
      <h3>
        Hi, I&apos;m <span className="text-pink1">Rui Okazaki</span>
        <br />
        I&apos;m a Front End Engineer<span className="text-pink1">.</span>
      </h3>
    </Title>
    <SubTitle startDelay={2800} avgTypingDelay={40} cursor={{ show: false }}>
      I want you to know about me.
    </SubTitle>
  </SectionFirstWrap>
);

export default FirstView;
