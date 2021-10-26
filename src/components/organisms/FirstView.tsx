import { VFC } from 'react';
import { Title, SubTitle } from './FirstView.style';
import SectionFirstWrap from '../templates/SectionFirstWrap';

const FirstView: VFC = () => (
  <div id="firstview">
    <SectionFirstWrap sectionTitle="Start">
      <h3>
        <Title cursor={{ show: false }}>
          Hi, I&apos;m <span className="text-pink1">Rui Okazaki</span>
          <br />
          I&apos;m a Front End Engineer<span className="text-pink1">.</span>
        </Title>
      </h3>
      <SubTitle startDelay={3500} cursor={{ show: false }}>
        I want you to know about me.
      </SubTitle>
    </SectionFirstWrap>
  </div>
);

export default FirstView;
