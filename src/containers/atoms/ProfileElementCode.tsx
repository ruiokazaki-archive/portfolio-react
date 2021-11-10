import { VFC } from 'react';
import DOMPurify from 'dompurify';

import { ProfileCode } from 'data/profileSkillCode';
import ProfileElementCode from 'components/atoms/ProfileElementCode';

type Props = {
  profileData: ProfileCode;
};

const EnhancedProfileElementCode: VFC<Props> = ({ profileData }) => {
  const createChar = (ary: string[]): string => {
    let char = '';
    for (let i = 0; i < ary.length; i += 1) {
      char += `"${ary[i]}", `;
    }

    return char.slice(0, -2);
  };

  const beforeCode = `class OkazakiRui {
    constructor() {
      this.name = "${profileData.constructor.name}";
      this.age = ${profileData.constructor.age};
      this.birthday = "${profileData.constructor.birthday.year}年${
    profileData.constructor.birthday.month
  }月${profileData.constructor.birthday.date}日";
      this.live = "${profileData.constructor.live}";
      this.email = "${profileData.constructor.email}";
    }
    programmingLanguage() {
      return [ ${createChar(profileData.programmingLanguage)} ];
    }
    mainLanguage() {
      return [ ${createChar(profileData.mainLanguage)} ];
    }
    tools() {
      return [ ${createChar(profileData.tools)} ];
    }
  }
  `;

  const addClass = () => {
    let afterCode;
    afterCode = beforeCode.replace(/ /g, `\u3000`);
    afterCode = afterCode.replace(
      /.*\r?\n/g,
      `<p class="codeWrap"><span class="code">$&</span></p>`,
    );
    afterCode = afterCode.replace(
      /\u3000"/g,
      `\u3000<span class='code-string'>"`,
    );
    afterCode = afterCode.replace(/",/g, `"</span>,`);
    afterCode = afterCode.replace(/";/g, `"</span>;`);
    afterCode = afterCode.replace(/"\u3000/g, `"</span>\u3000`);
    afterCode = afterCode.replace(
      /\u3000[0-9]*;/g,
      `<span class='code-number'>$&</span>`,
    );
    afterCode = afterCode.replace(
      /this*/g,
      `<span class='code-property'>$&</span>`,
    );
    afterCode = afterCode.replace(
      /\u3000[0-9a-zA-Z]*\(\)/g,
      `<span class='code-methods'>$&</span>`,
    );
    afterCode = afterCode.replace(
      /class\u3000/g,
      `<span class='code-class'>class\u3000</span>`,
    );
    afterCode = afterCode.replace(
      /OkazakiRui/g,
      `<span class='code-className'>$&</span>`,
    );
    afterCode = afterCode.replace(
      /return\u3000/g,
      `<span class='code-className'>return\u3000</span>`,
    );
    afterCode = afterCode.replace(
      /\(|\)|\[|\]|\u3000=|\{|\}/g,
      `<span class='code-brackets'>$&</span>`,
    );

    afterCode = DOMPurify.sanitize(afterCode);

    return afterCode;
  };

  return <ProfileElementCode afterCode={addClass()} />;
};

export default EnhancedProfileElementCode;
