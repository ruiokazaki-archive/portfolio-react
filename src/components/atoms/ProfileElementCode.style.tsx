import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ProfileCodeWrapStyle = styled.div`
  font-size: 16px;
  line-height: 24px;
  .codeWrap {
    position: relative;
    z-index: 2;
    color: #f2f2f2;
  }
  .codeWrap:hover::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    background-color: #1a1526;
    cursor: default;
  }
  .codeWrap::before {
    color: #f2f2f2;
    content: attr(data-value);
    display: block;
    width: 20px;
    height: 100%;
    position: absolute;
    left: -70px;
    margin: auto;
    font-size: 14px;
    text-align: end;
  }
  .codeWrap .code {
    display: block;
    width: 868px;
  }
  .code-class {
    color: #3691ff;
  }
  .code-className {
    color: #ff6480;
  }
  .code-string {
    color: #f9c859;
  }
  .code-number {
    color: #ff78f8;
  }
  .code-methods {
    color: #3fc56b;
  }
  .code-brackets {
    color: #7a82da;
  }
  .code-property {
    color: #ce9887;
  }
`;
const ProfileCodeWrap = tw(ProfileCodeWrapStyle)`font-mono`;

export default ProfileCodeWrap;
