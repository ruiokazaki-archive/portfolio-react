import { useEffect, VFC } from 'react';
import FirstView from 'components/organisms/FirstView';
import BIRDS from 'vanta/dist/vanta.birds.min';

const EnhancedFirstView: VFC = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    BIRDS({
      el: document.getElementById('Start'),
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
    });
  }, []);

  return <FirstView />;
};

export default EnhancedFirstView;
