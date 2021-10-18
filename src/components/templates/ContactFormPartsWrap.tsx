/* eslint-disable jsx-a11y/label-has-associated-control */
import { VFC, ReactNode } from 'react';

type Props = {
  LabelText: string;
  children: ReactNode;
};

const FormInput: VFC<Props> = ({ LabelText, children }) => (
  <div>
    <label>
      {LabelText}
      {children}
    </label>
  </div>
);

export default FormInput;
