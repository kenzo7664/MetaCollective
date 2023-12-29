import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const hasWindow: any = typeof window !== 'undefined'; // eslint-disable-line

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }
  useEffect(() => {
    if (hasWindow) {
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]); // eslint-disable-line

  return windowDimensions;
};

export default useWindowDimensions;
