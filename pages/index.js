import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/Image';
import styles from '../styles/Home.module.css';
export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateWidthAndHeight);
    updateWidthAndHeight();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWidthAndHeight);
    };
  }, []);

  const bannerRef = useRef(null);
  const starsRef = useRef(null);
  const mountRef = useRef(null);
  const campRef = useRef(null);

  useEffect(() => {
    bannerRef.current.style.opacity = `${1 - scrollPosition / 1000}`;
    bannerRef.current.style.transform = `scale(${1 + scrollPosition / 1000})`;
    starsRef.current.style.opacity = `${scrollPosition / 1000}`;
    mountRef.current.style.transform = `translateX(${0.1 * scrollPosition}px)`;
    campRef.current.style.transform = `translateX(${
      600 - 0.5 * scrollPosition
    }px)`;
  }, [scrollPosition]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Treck The Hill</title>
        <meta name="description" content="Treck the Hill" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.stars} ref={starsRef}>
        <Image src="/nightSky.jpg" alt="stars" width={width} height={height} />
      </div>
      <div className={styles.banner} ref={bannerRef}>
        <Image
          src="/banner.png"
          alt="banner"
          width={0.33 * width}
          height={0.6 * height}
        />
      </div>
      <div className={styles.camp} ref={campRef}>
        <Image
          src="/tent.png"
          alt="camp"
          width={0.2 * width}
          height={0.3 * height}
        />
      </div>
      <div className={styles.mount} ref={mountRef}>
        <Image
          src="/mountain.png"
          alt="mountain"
          width={0.4 * width}
          height={0.65 * height}
        />
      </div>
    </div>
  );
}
