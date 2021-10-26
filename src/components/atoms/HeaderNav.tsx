/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { VFC } from 'react';

const HeaderNav: VFC = () => {
  const scrollToSection = (id: string): void => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            scrollToSection('Start');
          }}
        >
          Start <span>/&gt;</span>
        </li>
        <li
          onClick={() => {
            scrollToSection('About');
          }}
        >
          About <span>/&gt;</span>
        </li>
        <li
          onClick={() => {
            scrollToSection('Profile');
          }}
        >
          Profile <span>/&gt;</span>
        </li>
        <li
          onClick={() => {
            scrollToSection('Works');
          }}
        >
          Works <span>/&gt;</span>
        </li>
        <li
          onClick={() => {
            scrollToSection('Contact');
          }}
        >
          Contact <span>/&gt;</span>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
