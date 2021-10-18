import { VFC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionBackground: VFC<Props> = ({ children }) => (
  <form
    action="https://click.ecc.ac.jp/ecc/rokazaki/sendmail.php"
    method="post"
  >
    {children}
  </form>
);

export default SectionBackground;
