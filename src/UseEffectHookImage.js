import { useState, useRef, useEffect } from 'react';

const UseEffectHookImage = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    setinView(isInView());
    setisLoading(false);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  const [inView, setinView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setinView(() => {
      return isInView();
    });
  };

  return isLoading ? null : (
    <img
      src={inView ? secondaryImg : primaryImg}
      alt=''
      ref={imageRef}
      width='900'
      height='600'
    />
  );
};

export default UseEffectHookImage;
