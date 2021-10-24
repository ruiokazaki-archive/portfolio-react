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

  const labelRefClassChange = (
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
  const labelElementClassChange = (
    el: Element | undefined,
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (el === undefined) return;
    if (event.target.value === '') {
      el.classList.remove('labelup');
    } else {
      el.classList.add('labelup');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    labelRefClassChange(nameLabelRef, e);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    labelRefClassChange(emailLabelRef, e);
  };
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    labelRefClassChange(messageLabelRef, e);
  };
  const focusClassChange = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.parentElement?.children[0].classList.add('labelup');
  };
  const focusoutClassChange = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    labelElementClassChange(e.target.parentElement?.children[0], e);
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
              onBlur={focusoutClassChange}
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
              onFocus={focusClassChange}
              onBlur={focusoutClassChange}
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
            onFocus={focusClassChange}
            onBlur={focusoutClassChange}
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
