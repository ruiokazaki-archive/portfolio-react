import { VFC } from 'react';

import Profile from '../../components/organisms/Profile';
import { ProfileData } from '../../data/ProfileSkillCode';

const EnhancedProfile: VFC = () => <Profile profileData={ProfileData} />;

export default EnhancedProfile;
