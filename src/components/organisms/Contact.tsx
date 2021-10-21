import { VFC } from 'react';

import SectionWrap from '../templates/SectionWrap';
import ContactForm from '../molecules/ContactForm';
import {
  Col2Wrap,
  Col1,
  Col2,
  Input,
  Textarea,
  FocusBorder,
  Label,
} from './Contact.style';

const Profile: VFC = () => (
  <SectionWrap sectionTitle="Contact">
    <ContactForm>
      <Col2Wrap>
        <Col2>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" name="name" />
          <FocusBorder />
        </Col2>

        <Col2>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" />
          <FocusBorder />
        </Col2>
      </Col2Wrap>

      <Col1>
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" />
        <FocusBorder />
      </Col1>
    </ContactForm>
  </SectionWrap>
);

export default Profile;
