/* eslint-disable no-irregular-whitespace */
import { VFC } from 'react';

import { ProfileCode } from '../../data/ProfileSkillCode';

type Props = {
  profileData: ProfileCode;
};

const ProfileElementCode: VFC<Props> = ({ profileData }) => {
  const createChar = (ary: string[]): string => {
    let char = '';
    for (let i = 0; i < ary.length; i += 1) {
      char += `"${ary[i]}", `;
    }

    return char.slice(0, -2);
  };

  const beforeCode = `class RuiOkazaki {
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

  return <div dangerouslySetInnerHTML={{ __html: sanitizer(beforeCode) }} />;
};

export default ProfileElementCode;
