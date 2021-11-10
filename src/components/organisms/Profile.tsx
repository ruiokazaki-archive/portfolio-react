/* eslint-disable no-irregular-whitespace */
import { VFC } from 'react';

import { ProfileCode } from 'data/profileSkillCode';
import SectionWrap from 'components/templates/SectionWrap';
import ProfileElementCode from 'containers/atoms/ProfileElementCode';

type Props = {
  profileData: ProfileCode;
};

const Profile: VFC<Props> = ({ profileData }) => (
  <SectionWrap sectionTitle="Profile">
    <ProfileElementCode profileData={profileData} />
  </SectionWrap>
);

export default Profile;
