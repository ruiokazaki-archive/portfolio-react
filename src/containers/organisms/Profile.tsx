import { VFC } from 'react';
import SectionWrap from '../../components/templates/SectionWrap';
// import {} from './Profile.style';

import { ProfileCode } from '../../data/ProfileSkillCode';

type Props = {
  profileData: ProfileCode;
};

const Profile: VFC<Props> = ({ profileData }) => {
  const createChar = (ary: string[]): string => {
    let char = '';
    for (let i = 0; i < ary.length; i += 1) {
      char += `"${ary[i]}", `;
    }

    return char.slice(0, -2);
  };

  return (
    <SectionWrap sectionTitle="Profile">
      <p>class OkazakiRui &#123;</p>
      <p>constructor() &#123;</p>
      <p>this.name = {profileData.constructor.name}</p>
      <p>this.age = {profileData.constructor.age}</p>
      <p>
        this.birthday =
        {`${profileData.constructor.birthday.year}年${profileData.constructor.birthday.month}月${profileData.constructor.birthday.date}日`}
      </p>
      <p>this.live = {profileData.constructor.live}</p>
      <p>this.email = {profileData.constructor.email}</p> <p>&#125;</p>
      <p>programmingLanguage() &#123;</p>
      <p>return [ {createChar(profileData.programmingLanguage)} ];</p>
      <p>&#125;</p> <p>mainLanguage() &#123;</p>
      <p>return [ {createChar(profileData.mainLanguage)} ];</p>
      <p>&#125;</p> <p>tools() &#123;</p>
      <p>return [ {createChar(profileData.tools)} ];</p> <p>&#125;</p>
      <p>&#125;</p>
    </SectionWrap>
  );
};

export default Profile;
