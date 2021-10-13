import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ProfileCodeWrapStyle = styled.div`
  .code .codeWrap {
    position: relative;
  }
  .code .codeWrap:hover {
    background-color: #1a1526;
    cursor: default;
  }
  .code .codeWrap::before {
    content: attr(data-value);
    position: absolute;
    display: block;
    width: 20px;
    left: 0;
    right: 930px;
    margin: auto;
    font-size: 14px;
    text-align: end;
  }
  .code .codeWrap .code {
    display: block;
    width: 868px;
    margin: 0 auto;
    padding: 0 22px;
  }
  .code .code-class {
    color: #3691ff;
  }
  .code .code-className {
    color: #ff6480;
  }
  .code .code-string {
    color: #f9c859;
  }
  .code .code-number {
    color: #ff78f8;
  }
  .code .code-methods {
    color: #3fc56b;
  }
  .code .code-brackets {
    color: #7a82da;
  }
  .code .code-property {
    color: #ce9887;
  }
`;
const ProfileCodeWrap = tw(ProfileCodeWrapStyle)``;

export default ProfileCodeWrap;
