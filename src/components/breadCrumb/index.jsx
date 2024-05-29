import { useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import { Template } from './styles';

const BreadCrumb = () => {
  const { pathname } = useLocation();

  const namePage = useMemo(() => {
    if (pathname.includes('/tonguet-twisters/')) {
      return 'Главная';
    }
  }, [pathname]);

  return <Template>{namePage}</Template>;
};

export default BreadCrumb;
