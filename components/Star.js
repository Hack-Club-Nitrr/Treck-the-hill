import React, { useRef, useEffect } from 'react';
import style from '../styles/star.module.css';

const Stars = () => {
  const star = useRef(null);
  //Random Function
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //Star function
  function createStar() {
    // size
    const size = random(2, 5) + 'px';
    star.current.style.width = size;
    star.current.style.height = size;

    // positon
    star.current.style.top = random(2, 98) + '%';
    star.current.style.left = random(2, 98) + '%';

    // glow
    const glow = random(3, 4);
    star.current.style.boxShadow =
      '0px 0px ' + glow + 'px ' + glow / 1.6 + 'px   rgba(255, 255, 255, 0.3)';

    // animation
    star.current.style.animationDuration = random(3000, 5000) + 'ms';
  }

  useEffect(() => {
    createStar();
  }, []);

  return <div ref={star} className={style.star}></div>;
};

export default Stars;
