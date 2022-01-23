import { VFC } from 'react';
import About from 'components/organisms/About';
import { useNavigate } from 'react-router-dom';

const EnhancedAbout: VFC = () => {
  const navigate = useNavigate();
  const toAboutPage = () => {
    navigate('/about');
  };

  return <About handleClick={toAboutPage} />;
};

export default EnhancedAbout;
