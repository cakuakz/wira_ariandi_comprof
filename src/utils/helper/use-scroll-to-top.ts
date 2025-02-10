import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function useScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, search]);
}