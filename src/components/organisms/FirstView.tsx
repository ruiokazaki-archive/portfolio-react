import { useEffect, VFC } from 'react';
import { Title, SubTitle } from 'components/organisms/FirstView.style';
import SectionFirstWrap from 'components/templates/SectionFirstWrap';
import BIRDS from 'vanta/dist/vanta.birds.min';

const FirstView: VFC = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    // BIRDS({
    //   el: document.getElementById('Start'),
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: true,
    //   scale: 1,
    //   scaleMobile: 1,
    //   backgroundColor: '#110e17',
    //   color1: '#4f0f4c',
    //   color2: '#4f0f4c',
    //   colorMode: 'variance',
    //   birdSize: 1,
    //   wingSpan: 20,
    //   speedLimit: 8,
    //   separation: 29,
    //   alignment: 33,
    //   cohesion: 50,
    // });
  }, []);

  return (
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
};

export default FirstView;
