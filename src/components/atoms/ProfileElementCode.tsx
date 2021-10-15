/* eslint-disable react/no-danger */
import { VFC, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';

import ProfileCodeWrap from './ProfileElementCode.style';

type Props = {
  afterCode: string;
};

const ProfileElementCode: VFC<Props> = ({ afterCode }) => {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (el.current == null) return;
    const els = el.current.children;

    for (let i = 0; i < els.length; i += 1) {
      const element = els[i];
      element.setAttribute('data-value', String(i + 1));
    }
  }, []);

  return (
    <ProfileCodeWrap
      ref={el}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(afterCode) }}
    />
  );
};

export default ProfileElementCode;
