import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const LabelStyle = styled.label`
  padding-top: 20px;
  margin-bottom: 50px;
  font-size: 14px;

  input,
  textarea {
    padding: 0 6px;
    transition: all 0.3s;
    border-bottom: 2px solid #f2f2f2;
    &:focus {
      border-bottom: 2px solid #f858f1;
      outline: none;
    }
  }
  input {
    width: 386px;
    &:-webkit-autofill {
      box-shadow: 0 0 0px 40px #14121c inset !important;
      -webkit-text-fill-color: #f2f2f2 !important;
    }
  }
  textarea {
    width: 100%;
    min-height: 30px;
    resize: none;
  }
`;
export const Label = tw(LabelStyle)`flex relative`;
const LabelStyleStyle = styled.p`
  left: 6px;
  top: 20px;
  width: fit-content;
`;
export const LabelTitle = tw(LabelStyleStyle)`absolute`;
