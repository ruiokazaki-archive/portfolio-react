import { VFC } from 'react';
import {
  BackgroundWrap,
  BackgroundText,
} from 'components/molecules/SectionBackground.style';

type Props = {
  sectionTitle: string;
};

const SectionBackground: VFC<Props> = ({ sectionTitle }) => (
  <BackgroundWrap>
    <BackgroundText>{sectionTitle}</BackgroundText>
  </BackgroundWrap>
);

export default SectionBackground;
