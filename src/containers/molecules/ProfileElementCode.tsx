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

  return (
    <>
      <p>class OkazakiRui &#123;;</p>
      <p>　constructor( ) &#123;;</p>
      <p>　　this.name = &#34;{profileData.constructor.name}&#34;;</p>
      <p>　　this.age = {profileData.constructor.age};</p>
      <p>
        　　this.birthday = &#34;
        {`${profileData.constructor.birthday.year}年${profileData.constructor.birthday.month}月${profileData.constructor.birthday.date}日`}
        &#34;;
      </p>
      <p>　　this.live = &#34;{profileData.constructor.live}&#34;;</p>
      <p>　　this.email = &#34;{profileData.constructor.email}&#34;;</p>
      <p>　&#125;</p>
      <p>　programmingLanguage( ) &#123;</p>
      <p>　　return [ {createChar(profileData.programmingLanguage)} ];</p>
      <p>　&#125;</p> <p>　mainLanguage( ) &#123;</p>
      <p>　　return [ {createChar(profileData.mainLanguage)} ];</p>
      <p>　&#125;</p> <p>　tools( ) &#123;</p>
      <p>　　return [ {createChar(profileData.tools)} ];</p> <p>　&#125;</p>
      <p>&#125;</p>
    </>
  );
};

export default ProfileElementCode;
