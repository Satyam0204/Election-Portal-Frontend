import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBlockBackNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (event) => {
      event.preventDefault();
      navigate(1); 
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);
};

export default useBlockBackNavigation;
