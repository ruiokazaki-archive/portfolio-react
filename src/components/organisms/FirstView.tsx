import { VFC } from 'react';
import SectionFirstWrap from '../templates/SectionFirstWrap';

const FirstView: VFC = () => (
  <SectionFirstWrap sectionTitle="Start">
    <div>
      <h1>
        Hi, I&apos;m <span className="c-p">Rui Okazaki</span>
        <br />
        I&apos;m a Front End Engineer<span className="c-p">.</span>
      </h1>
    </div>
  </SectionFirstWrap>
);

export default FirstView;
