import { useEffect } from 'react';

const useResizeEffect = (func: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', func);
    return () => {
      window.removeEventListener('resize', func);
    };
  }, []);
};

export default useResizeEffect;
