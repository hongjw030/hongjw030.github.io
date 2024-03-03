import { useEffect } from 'react';

const useClientEffect = (func: () => void, deps: Array<any>) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      func();
    }
  }, [typeof window, ...deps]);
};

export default useClientEffect;
