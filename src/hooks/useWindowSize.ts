import { useState } from 'react';
import useClientEffect from '@/hooks/useClientEffect';
import useResizeEffect from '@/hooks/useResizeEffect';

type ScreenType = "desktop" | "mobile"

const getEnvSize = (width: number) => {
  if (width < 550) {
    return 'mobile';
  } else {
    return 'desktop';
  }
};

export default function useGetScreenType () {
  const [screenType, setScreenType] = useState<ScreenType>('desktop');
  const windowSizeToSetEnv = () => {
    let w = window?.innerWidth;
    const calcEnv = getEnvSize(w);
    setScreenType(calcEnv);
  };

  useResizeEffect(windowSizeToSetEnv);

  useClientEffect(windowSizeToSetEnv, []);
  return {
    screenType,
  };
};