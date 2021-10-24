import { VFC, useRef, RefObject, ChangeEvent, FocusEvent } from 'react';
import Contact from '../../components/organisms/Contact';

const EnhancedContact: VFC = () => {
  const nameLabelRef = useRef<HTMLLabelElement>(null);
  const emailLabelRef = useRef<HTMLLabelElement>(null);
  const messageLabelRef = useRef<HTMLLabelElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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
    if (messageRef.current !== null) {
      messageRef.current.style.height = `${
        messageRef.current.value.split('\n').length * 20 + 30
      }px`;
    }
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
    <Contact
      nameLabelRef={nameLabelRef}
      emailLabelRef={emailLabelRef}
      messageLabelRef={messageLabelRef}
      messageRef={messageRef}
      handleNameChange={handleNameChange}
      handleEmailChange={handleEmailChange}
      handleMessageChange={handleMessageChange}
      focusClassChange={focusClassChange}
      focusoutClassChange={focusoutClassChange}
    />
  );
};

export default EnhancedContact;
