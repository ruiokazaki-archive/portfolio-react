import { VFC } from 'react';
import SectionFirstTitleElement from './SectionFirstTitle.style';

type Props = {
  sectionTitle: string;
};

const SectionFirstTitle: VFC<Props> = ({ sectionTitle }) => (
  <SectionFirstTitleElement>{sectionTitle} /&gt;</SectionFirstTitleElement>
);

export default SectionFirstTitle;
