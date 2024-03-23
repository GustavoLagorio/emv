import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollTop() {
    console.log('funca');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('hola');
  }, [pathname]);

  console.log(pathname);

  return null;
}