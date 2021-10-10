import { VFC } from 'react';
import SectionWrap from '../templates/SectionWrap';
// import {} from './Profile.style';

import { ProfileCode } from '../../data/ProfileSkillCode';

type Props = {
  profileData: ProfileCode;
};

const Profile: VFC<Props> = ({ profileData }) => (
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
    <p>this.email = {profileData.constructor.email}</p>
  </SectionWrap>
);

export default Profile;
