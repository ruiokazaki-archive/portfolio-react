import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Col2WrapStyle = styled.div`
  padding-top: 20px;
  margin-bottom: 50px;
`;
export const Col2Wrap = tw(Col2WrapStyle)`flex justify-between`;

const Col1Style = styled.div`
  margin-bottom: 60px;
`;
export const Col1 = tw(Col1Style)`relative`;

const FocusBorderStyle = styled.div`
  background-color: #f858f1;
  height: 2px;
  transform-origin: center center;
  transform: scaleX(0);
  transition: all 0.3s;
`;
export const FocusBorder = tw(FocusBorderStyle)`absolute w-full bottom-0`;

export const Input = styled.input`
  display: block;
  width: 100%;
  min-height: 30px;
  padding: 0 6px;
  border-bottom: 2px solid #f2f2f2;
  background-color: none;
  color: #f2f2f2;
  line-height: 21px;
  letter-spacing: 1px;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 40px #14121c inset !important;
    -webkit-text-fill-color: #f2f2f2 !important;
  }
`;
export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 30px;
  padding: 4px 6px;
  border-bottom: 2px solid #f2f2f2;
  background-color: none;
  color: #f2f2f2;
  line-height: 21px;
  letter-spacing: 1px;
  resize: none;
`;
const LabelStyle = styled.label`
  left: 6px;
  top: 4px;
  letter-spacing: 1px;
  transition: all 0.3s;
`;
export const Label = tw(LabelStyle)`absolute`;

const Col2Style = styled.div`
  width: 386px;

  ${Input}:focus + ${FocusBorderStyle} {
    transform: scaleX(1);
  }
`;
export const Col2 = tw(Col2Style)`relative`;

const SubmitButtonStyle = styled.button`
  height: 62px;
  width: 180px;
  font-size: 22px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  transition: all 0.3s;
  margin: 0 auto;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SubmitButton = tw(SubmitButtonStyle)`bg-green1 text-white1 block`;
