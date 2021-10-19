import { VFC } from 'react';

import SectionWrap from '../templates/SectionWrap';
import ContactForm from '../molecules/ContactForm';
import ContactFormPartsWrap from '../templates/ContactFormPartsWrap';

const Profile: VFC = () => (
  <SectionWrap sectionTitle="Contact">
    <ContactForm>
      <div className="flex justify-between">
        <ContactFormPartsWrap LabelText="Name">
          <input type="text" />
        </ContactFormPartsWrap>
        <ContactFormPartsWrap LabelText="Email">
          <input type="text" />
        </ContactFormPartsWrap>
      </div>
      <ContactFormPartsWrap LabelText="Message">
        <textarea />
      </ContactFormPartsWrap>
    </ContactForm>
  </SectionWrap>
);

export default Profile;
