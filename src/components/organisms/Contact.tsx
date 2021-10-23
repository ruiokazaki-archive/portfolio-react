import { VFC, useRef, RefObject, ChangeEvent, FocusEvent } from 'react';

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

const Profile: VFC = () => {
  const nameLabelRef = useRef<HTMLLabelElement>(null);
  const emailLabelRef = useRef<HTMLLabelElement>(null);
  const messageLabelRef = useRef<HTMLLabelElement>(null);

  const labelClassChange = (
    ref: RefObject<HTMLLabelElement>,
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (ref.current === null) return;
    if (event.target.value === '') {
      ref.current.classList.remove('labelup');
    } else {
      ref.current.classList.add('labelup');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    labelClassChange(nameLabelRef, e);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    labelClassChange(emailLabelRef, e);
  };
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    labelClassChange(messageLabelRef, e);
  };
  const focusClassChange = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e.target.parentElement?.children[0].);
    console.dir(e.target.parentElement?.children[0].);

    // switch (e.target) {
    //   case value:

    //     break;

    //   default:
    //     break;
    // }
  };

  return (
    <SectionWrap sectionTitle="Contact">
      <ContactForm>
        <Col2Wrap>
          <Col2>
            <Label ref={nameLabelRef} htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              name="name"
              onChange={handleNameChange}
              onFocus={focusClassChange}
            />
            <FocusBorder />
          </Col2>

          <Col2>
            <Label ref={emailLabelRef} htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={handleEmailChange}
            />
            <FocusBorder />
          </Col2>
        </Col2Wrap>

        <Col1>
          <Label ref={messageLabelRef} htmlFor="message">
            Message
          </Label>
          <Textarea
            onChange={handleMessageChange}
            name="message"
            id="message"
          />
          <FocusBorder />
        </Col1>
      </ContactForm>
    </SectionWrap>
  );
};

export default Profile;
