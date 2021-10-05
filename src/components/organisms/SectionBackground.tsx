import { VFC } from 'react';

type Props = {
  sectionTitle: string;
  children: React.ReactNode;
};

const SectionBackground: VFC<Props> = ({ sectionTitle, children }) => (
  <div className="">
    <p>{sectionTitle}</p>
    {children}
  </div>
);

export default SectionBackground;
