import { VFC } from 'react';
import HeaderNav from '../../components/molecules/HeaderNav';

const EnhancedHeaderNav: VFC = () => {
  const scrollToSection = (id: string): void => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return <HeaderNav scrollToSection={scrollToSection} />;
};

export default EnhancedHeaderNav;
