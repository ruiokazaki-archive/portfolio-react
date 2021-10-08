import { VFC } from 'react';
import SectionTitle from './SectionTitle.style';

type Props = {
  sectionTitle: string;
};

const SectionBackground: VFC<Props> = ({ sectionTitle }) => (
  <SectionTitle>{sectionTitle} /&gt;</SectionTitle>
);

export default SectionBackground;
