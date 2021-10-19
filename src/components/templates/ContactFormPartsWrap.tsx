/* eslint-disable jsx-a11y/label-has-associated-control */
import { VFC, ReactNode } from 'react';
import { Label, LabelTitle } from './ContactFormPartsWrap.style';

type Props = {
  LabelText: string;
  children: ReactNode;
};

const FormInput: VFC<Props> = ({ LabelText, children }) => (
  <Label>
    <LabelTitle>{LabelText}</LabelTitle>
    {children}
  </Label>
);

export default FormInput;
