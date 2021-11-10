/* eslint-disable react/no-danger */
import { VFC, useRef, useEffect } from 'react';

import ProfileCodeWrap from 'components/atoms/ProfileElementCode.style';

type Props = {
  afterCode: string;
};

const ProfileElementCode: VFC<Props> = ({ afterCode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current == null) return;
    const refs = ref.current.children;
    for (let i = 0; i < refs.length; i += 1) {
      const element = refs[i];
      element.setAttribute('data-value', String(i + 1));
    }
  }, []);

  return (
    <ProfileCodeWrap
      ref={ref}
      dangerouslySetInnerHTML={{ __html: afterCode }}
    />
  );
};

export default ProfileElementCode;
