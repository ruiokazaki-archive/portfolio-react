import { VFC, useRef, useEffect, useState } from 'react';
import { Title, SubTitle } from './FirstView.style';
import SectionFirstWrap from '../templates/SectionFirstWrap';
import BIRDS from '../../script/vanta.birds.min';

const FirstView: VFC = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          scale: 1,
          scaleMobile: 1,
          backgroundColor: '#110e17',
          color1: '#4f0f4c',
          color2: '#4f0f4c',
          colorMode: 'variance',
          birdSize: 1,
          wingSpan: 20,
          speedLimit: 8,
          separation: 29,
          alignment: 33,
          cohesion: 50,
        }),
      );
    }

    return () => {
      if (vantaEffect) setVantaEffect(null);
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef}>
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
};

export default FirstView;
