import { VFC, RefObject, ChangeEvent, FocusEvent } from 'react';

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

type Props = {
  nameLabelRef: RefObject<HTMLLabelElement>;
  emailLabelRef: RefObject<HTMLLabelElement>;
  messageLabelRef: RefObject<HTMLLabelElement>;
  messageRef: RefObject<HTMLTextAreaElement>;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  focusClassChange: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  focusoutClassChange: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const Contact: VFC<Props> = ({
  nameLabelRef,
  emailLabelRef,
  messageLabelRef,
  messageRef,
  handleNameChange,
  handleEmailChange,
  handleMessageChange,
  focusClassChange,
  focusoutClassChange,
}) => (
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
          ref={messageRef}
        />
        <FocusBorder />
      </Col1>
    </ContactForm>
  </SectionWrap>
);

export default Contact;
