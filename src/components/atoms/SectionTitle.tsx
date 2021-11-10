import { VFC } from 'react';
import SectionTitleStyle from 'components/atoms/SectionTitle.style';

type Props = {
  sectionTitle: string;
};

const SectionTitle: VFC<Props> = ({ sectionTitle }) => (
  <SectionTitleStyle>{sectionTitle} /&gt;</SectionTitleStyle>
);

export default SectionTitle;
