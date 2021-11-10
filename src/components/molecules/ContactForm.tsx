import { VFC, ReactNode } from 'react';
import Form from 'components/molecules/ContactForm.style';

type Props = {
  children: ReactNode;
};

const SectionBackground: VFC<Props> = ({ children }) => (
  <Form
    action="https://click.ecc.ac.jp/ecc/rokazaki/sendmail.php"
    method="post"
  >
    {children}
  </Form>
);

export default SectionBackground;
