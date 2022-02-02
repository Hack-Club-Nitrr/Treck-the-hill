import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/Image';
import styles from '../styles/Home.module.css';
import Stars from '../components/Stars';
import { About } from '../components/About';

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
  const tree1Ref = useRef(null);
  const tree2Ref = useRef(null);
  const tree3Ref = useRef(null);
  const baseRef = useRef(null);
  // const starsRef = useRef(null);
  const mountRef = useRef(null);
  // const campRef = useRef(null);

  useEffect(() => {
    bannerRef.current.style.transform = `translateY(${
      -0.6 * scrollPosition
    }px) scale(1.2)`;
    if (scrollPosition < 630) {
      tree1Ref.current.style.opacity = '1';
      tree1Ref.current.style.transform = `scale(1.5)`;
    } else {
      tree1Ref.current.style.opacity = `${1 - scrollPosition / 1000}`;
      tree1Ref.current.style.transform = `scale(${
        1.5 + scrollPosition / 1000
      }) translate(${315 - 0.5 * scrollPosition}px,${
        -252 + 0.4 * scrollPosition
      }px)`;
    }
    if (scrollPosition < 700) {
      tree2Ref.current.style.opacity = '1';
      tree2Ref.current.style.transform = `scale(1.5)`;
    } else {
      tree2Ref.current.style.opacity = `${1 - scrollPosition / 1000}`;
      tree2Ref.current.style.transform = `scale(${
        1.5 + scrollPosition / 1000
      }) translate(${350 - 0.5 * scrollPosition}px,${
        -280 + 0.4 * scrollPosition
      }px)`;
    }
    if (scrollPosition < 700) {
      tree3Ref.current.style.opacity = '1';
      tree3Ref.current.style.transform = `scale(1.5)`;
    } else {
      tree3Ref.current.style.opacity = `${1 - scrollPosition / 1000}`;
      tree3Ref.current.style.transform = `scale(${
        1.5 + scrollPosition / 1000
      }) translate(${-350 + 0.5 * scrollPosition}px,${
        -280 + 0.4 * scrollPosition
      }px)`;
    }
    if (scrollPosition < 500) {
      // mountRef.current.style.opacity = '1';
      // mountRef.current.style.transform = `scale(1)`;
    } else {
      // mountRef.current.style.opacity = `${0.8 - (scrollPosition - 500) / 1000}`;
      // mountRef.current.style.transform = `scale(${
      //   1 + (scrollPosition - 500) / 1000
      // })`;
      mountRef.current.style.transform = `translateY(${
        scrollPosition / 2 - 250
      }px)`;
    }
    // if(){

    // }
    // starsRef.current.style.opacity = `${scrollPosition / 1000}`;
    // mountRef.current.style.transform = `translateX(${-0.5 * scrollPosition}px)`;
    // campRef.current.style.transform = `translateX(${0.5 * scrollPosition}px)`;
  }, [scrollPosition]);

  console.log(scrollPosition);
  return (
    <div className={styles.container}>
      <Stars />
      <Head>
        <title>Treck The Hill</title>
        <meta name="description" content="Treck the Hill" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className={styles.stars} ref={starsRef}>
        <Image src="/nightSky.jpg" alt="stars" width={width} height={height} />
      </div> */}
      <div className={styles.banner} ref={bannerRef}>
        <Image
          src="/banner.png"
          alt="banner"
          width={0.33 * width}
          height={0.6 * height}
        />
      </div>
      {/* <div className={styles.camp} ref={campRef}>
        <Image
          src="/tent2.png"
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
      </div> */}

      {/* clouds */}
      <svg height="347" width="168" id="cloud1" className={styles.cloud1}>
        <g>
          <polygon points="0,30 8,19 27,18 22,36 9,37" fill="#d5d6e2" />
          <polygon points="0,30 9,37 3,50" fill="#c7c2d1" />
          <polygon points="3,50 9,37 22,36 33,44 14,55" fill="#a8a9b7" />
          <polygon points="14,55 33,44 36,52 23,58" fill="#7a7789" />
          <polygon points="27,18 22,36 33,44" fill="#acabb9" />

          <polygon points="31,11 51,4 66,1 83,13 83,23 78,23" fill="#fff6e7" />
          <polygon points="27,18 31,11 54,6 56,32 33,40 29,36" fill="#d0d0dc" />
          <polygon points="29,36 58,65 42,67 31,57" fill="#9694a3" />
          <polygon points="33,40 56,32 75,37 58,65" fill="#a2a1b1" />
          <polygon points="58,65 75,37 82,57" fill="#9897a7" />
          <polygon points="56,32 54,6 80,14 82,57 75,37" fill="#d7d6e2" />

          <polygon points="80,15 84,17 88,30 85,50 81,51" fill="#9d9da9" />
          <polygon points="90,16 82,20 81,31 95,35" fill="#cdcdda" />
          <polygon points="81,31 82,47 95,35" fill="#a2a2b0" />
          <polygon points="82,47 95,35 105,45 91,53" fill="#878892" />
          <polygon points="105,45 95,35 106,22" fill="#fbe5d5" />
          <polygon points="106,22 95,35 90,16" fill="#dbd6dd" />
        </g>
      </svg>

      <svg height="347" width="168" id="cloud2" className={styles.cloud2}>
        <g transform="scale(0.5)">
          <polygon points="0,30 8,19 27,18 22,36 9,37" fill="#d5d6e2" />
          <polygon points="0,30 9,37 3,50" fill="#c7c2d1" />
          <polygon points="3,50 9,37 22,36 33,44 14,55" fill="#a8a9b7" />
          <polygon points="14,55 33,44 36,52 23,58" fill="#7a7789" />
          <polygon points="27,18 22,36 33,44" fill="#acabb9" />

          <polygon points="31,11 51,4 66,1 83,13 83,23 78,23" fill="#fff6e7" />
          <polygon points="27,18 31,11 54,6 56,32 33,40 29,36" fill="#d0d0dc" />
          <polygon points="29,36 58,65 42,67 31,57" fill="#9694a3" />
          <polygon points="33,40 56,32 75,37 58,65" fill="#a2a1b1" />
          <polygon points="58,65 75,37 82,57" fill="#9897a7" />
          <polygon points="56,32 54,6 80,14 82,57 75,37" fill="#d7d6e2" />

          <polygon points="80,15 84,17 88,30 85,50 81,51" fill="#9d9da9" />
          <polygon points="90,16 82,20 81,31 95,35" fill="#cdcdda" />
          <polygon points="81,31 82,47 95,35" fill="#a2a2b0" />
          <polygon points="82,47 95,35 105,45 91,53" fill="#878892" />
          <polygon points="105,45 95,35 106,22" fill="#fbe5d5" />
          <polygon points="106,22 95,35 90,16" fill="#dbd6dd" />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 243.23 176.82"
        className={styles.hills}
        ref={mountRef}
      >
        <defs></defs>
        <g className="cls-1">
          <g id="Layer_1" data-name="Layer 1">
            {/* central Hill */}
            <polygon
              className="cls-12"
              points="126.97 42.51 92.72 114.88 125.58 114.88 133.84 42.51 126.97 42.51"
            />
            <polygon
              className="cls-10"
              points="145.07 42.51 133.84 42.51 125.58 114.88 179.32 114.88 145.07 42.51"
            />
            <path
              className="cls-8"
              d="M124.41,47.91,128.69,45l3.51,11.93L136,23.38Z"
            />
            <path
              className="cls-9"
              d="M136,23.38h0L132.2,56.89h0l3.13-6.51,5.42,2.42,4-6.65,3.74,3.58Z"
            />
            {/* Left Hill */}
            <polygon
              className="cls-10"
              points="81.14 64.73 61.94 105.31 80.36 105.31 84.99 64.73 81.14 64.73"
            />
            <polygon
              className="cls-11"
              points="91.29 64.73 84.99 64.73 80.36 105.31 110.49 105.31 91.29 64.73"
            />
            <path className="cls-8" d="M79.7,67.76l2.4-1.65,2,6.69L86.21,54Z" />
            <path
              className="cls-9"
              d="M86.21,54h0L84.07,72.8h0l1.76-3.65,3,1.35,2.24-3.73,2.1,2Z"
            />
            {/* Right Hill */}
            <polygon
              className="cls-6"
              points="184.48 63.82 160.21 115.12 183.5 115.12 189.35 63.82 184.48 63.82"
            />
            <polygon
              className="cls-7"
              points="197.31 63.82 189.35 63.82 183.5 115.12 221.59 115.12 197.31 63.82"
            />
            <path
              className="cls-8"
              d="M182.67,67.65l3-2.09L188.19,74l2.71-23.75Z"
            />
            <path
              className="cls-9"
              d="M190.9,50.27h0L188.19,74h0l2.22-4.61,3.84,1.71,2.83-4.71,2.65,2.54Z"
            />
          </g>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.base}
        ref={baseRef}
      >
        <path
          fill="#879759"
          fill-opacity="1"
          d="M0,288L120,261.3C240,235,480,181,720,181.3C960,181,1200,235,1320,261.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      {/* Trees 1*/}
      <svg className={styles.trees1} ref={tree1Ref}>
        <g className="tree" id="tree" transform="translate(400,30)">
          <polygon
            points="25,75 27,44 21,34 25,33 30,41 38,33 40,34 31,46 29,75"
            fill="#3f2145"
          />
          <polygon points="29,75 31,46 32,45 32,74" fill="#812743" />

          <polygon
            points="2,21 11,33 20,32 27,29 32,23 24,35 11,34"
            fill="#282246"
          />
          <polygon points="27,29 33,13 18,0 29,2 37,13 32,23" fill="#6a7749" />

          <polygon
            points="33,23 35,32 45,37 55,27 44,35 37,31"
            fill="#210f3f"
          />
          <polygon points="37,31 38,17 46,17 50,31" fill="#354346" />
          <polygon points="37,31 50,31 45,37" fill="#292941" />
          <polygon points="33,23 37,31 38,17" fill="#2b2d42" />
          <polygon points="38,17 46,17 46,11" fill="#495e4b" />
          <polygon points="46,17 46,11 54,18" fill="#5b7049" />
          <polygon points="44,11 54,18 56,26 50,31" fill="#515d49" />

          <polygon points="11,33 20,32 27,29 15,19" fill="#292e42" />
          <polygon points="27,29 33,13 15,19" fill="#424f46" />
          <polygon points="33,13 18,0 15,19" fill="#48604a" />
          <polygon points="18,0 7,5 15,19" fill="#3a5449" />
          <polygon points="7,5 0,18 15,19" fill="#344847" />
          <polygon points="0,18 11,33 15,19" fill="#292c4b" />
        </g>

        <use x="-215" y="-23" href="#tree" transform="scale(0.8)" />
        <use x="-220" y="-20" href="#tree" />
        <use x="540" y="-30" href="#tree" />
        <use x="480" y="-20" href="#tree" />
        <use x="440" y="-15" href="#tree" transform="scale(1.2)" />
      </svg>
      {/* Tree 2 */}
      <svg className={styles.trees2} ref={tree2Ref}>
        <g className="tree" id="tree" transform="translate(400,30)">
          <polygon
            points="25,75 27,44 21,34 25,33 30,41 38,33 40,34 31,46 29,75"
            fill="#3f2145"
          />
          <polygon points="29,75 31,46 32,45 32,74" fill="#812743" />

          <polygon
            points="2,21 11,33 20,32 27,29 32,23 24,35 11,34"
            fill="#282246"
          />
          <polygon points="27,29 33,13 18,0 29,2 37,13 32,23" fill="#6a7749" />

          <polygon
            points="33,23 35,32 45,37 55,27 44,35 37,31"
            fill="#210f3f"
          />
          <polygon points="37,31 38,17 46,17 50,31" fill="#354346" />
          <polygon points="37,31 50,31 45,37" fill="#292941" />
          <polygon points="33,23 37,31 38,17" fill="#2b2d42" />
          <polygon points="38,17 46,17 46,11" fill="#495e4b" />
          <polygon points="46,17 46,11 54,18" fill="#5b7049" />
          <polygon points="44,11 54,18 56,26 50,31" fill="#515d49" />

          <polygon points="11,33 20,32 27,29 15,19" fill="#292e42" />
          <polygon points="27,29 33,13 15,19" fill="#424f46" />
          <polygon points="33,13 18,0 15,19" fill="#48604a" />
          <polygon points="18,0 7,5 15,19" fill="#3a5449" />
          <polygon points="7,5 0,18 15,19" fill="#344847" />
          <polygon points="0,18 11,33 15,19" fill="#292c4b" />
        </g>

        <use x="-215" y="-23" href="#tree" transform="scale(0.8)" />
        <use x="-220" y="-20" href="#tree" />
        <use x="540" y="-30" href="#tree" />
        <use x="480" y="-20" href="#tree" />
        <use x="440" y="-15" href="#tree" transform="scale(1.2)" />
      </svg>
      {/* Tree 3 */}
      <svg className={styles.trees3} ref={tree3Ref}>
        <g className="tree" id="tree" transform="translate(400,30)">
          <polygon
            points="25,75 27,44 21,34 25,33 30,41 38,33 40,34 31,46 29,75"
            fill="#3f2145"
          />
          <polygon points="29,75 31,46 32,45 32,74" fill="#812743" />

          <polygon
            points="2,21 11,33 20,32 27,29 32,23 24,35 11,34"
            fill="#282246"
          />
          <polygon points="27,29 33,13 18,0 29,2 37,13 32,23" fill="#6a7749" />

          <polygon
            points="33,23 35,32 45,37 55,27 44,35 37,31"
            fill="#210f3f"
          />
          <polygon points="37,31 38,17 46,17 50,31" fill="#354346" />
          <polygon points="37,31 50,31 45,37" fill="#292941" />
          <polygon points="33,23 37,31 38,17" fill="#2b2d42" />
          <polygon points="38,17 46,17 46,11" fill="#495e4b" />
          <polygon points="46,17 46,11 54,18" fill="#5b7049" />
          <polygon points="44,11 54,18 56,26 50,31" fill="#515d49" />

          <polygon points="11,33 20,32 27,29 15,19" fill="#292e42" />
          <polygon points="27,29 33,13 15,19" fill="#424f46" />
          <polygon points="33,13 18,0 15,19" fill="#48604a" />
          <polygon points="18,0 7,5 15,19" fill="#3a5449" />
          <polygon points="7,5 0,18 15,19" fill="#344847" />
          <polygon points="0,18 11,33 15,19" fill="#292c4b" />
        </g>

        <use x="-215" y="-23" href="#tree" transform="scale(0.8)" />
        <use x="-220" y="-20" href="#tree" />
        <use x="540" y="-30" href="#tree" />
        <use x="480" y="-20" href="#tree" />
        <use x="440" y="-15" href="#tree" transform="scale(1.2)" />
      </svg>
      {/* <div className={styles.camp}>
        <Image
          src="/camp.png"
          alt="camp"
          width={0.3 * width}
          height={0.3 * height}
        />
      </div> */}
      <div style={{ height: '250vh' }}></div>
      <About />
      <style jsx>
        {`
          .background {
            width: 800px;
            margin: 30px auto;
          }

          svg .cls-21,
          svg .cls-20,
          svg .cls-19,
          svg .cls-22,
          svg .cls-14,
          svg .cls-23 {
            animation-name: ship-move, ship-move1;
            animation-duration: 6s, 15s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }

          @keyframes ship-move {
            0% {
              transform: translate(0px);
            }

            50% {
              transform: translate(6px);
            }
          }

          @keyframes ship-move1 {
            0% {
              transform: rotate(2deg);
            }

            50% {
              transform: rotate(-0.5deg);
            }

            100% {
              transform: rotate(2deg);
            }
          }

          svg .cls-4:first-child,
          svg .cls-5 {
            animation-name: back-cloud-move;
            animation-duration: 100s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            transform: translate(240px);
          }

          @keyframes back-cloud-move {
            0% {
              transform: translate(240px);
            }

            100% {
              transform: translate(-240px);
            }
          }

          svg .cls-4:not(:first-child),
          svg .cls-13 {
            animation-name: cloud-move;
            animation-duration: 70s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            transform: translate(-240px);
          }

          @keyframes cloud-move {
            0% {
              transform: translate(-240px);
            }

            100% {
              transform: translate(240px);
            }
          }

          svg .cls-24 {
            animation-name: wave1-move;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            transform: translateY(1px);
          }

          @keyframes wave1-move {
            0% {
              transform: translateY(1px);
            }

            50% {
              transform: translateY(-1px);
            }
          }

          svg .cls-25 {
            animation-name: wave2-move;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            transform: translateY(0px);
          }

          @keyframes wave2-move {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(1px);
            }
          }
          .cls-1 {
            isolation: isolate;
          }

          .cls-2 {
            fill: #81d4fa;
          }

          .cls-3,
          .cls-5 {
            opacity: 0.59;
          }

          .cls-4,
          .cls-5,
          .cls-13 {
            fill: #fefefe;
          }

          .cls-6 {
            fill: #803673;
          }

          .cls-7 {
            fill: #5d2f60;
          }

          .cls-8 {
            fill: #fcfcfe;
          }

          .cls-9 {
            fill: #8fdee0;
          }

          .cls-10 {
            fill: #5d2f60;
          }

          .cls-11 {
            fill: #5d2f60;
          }

          .cls-12 {
            fill: #803673;
          }

          .cls-13 {
            opacity: 0.35;
            mix-blend-mode: multiply;
          }

          .cls-14 {
            fill: #e57373;
          }

          .cls-15 {
            fill: #9ccc65;
          }

          .cls-16 {
            fill: #7cb342;
          }

          .cls-17 {
            fill: #689f38;
          }

          .cls-18 {
            fill: #8d6e63;
          }

          .cls-19 {
            fill: #6d4c41;
          }

          .cls-20 {
            fill: #fff;
          }

          .cls-21 {
            fill: #e53935;
          }

          .cls-22 {
            fill: #ef5350;
          }

          .cls-23 {
            opacity: 0.25;
          }

          .cls-24 {
            fill: #80deea;
          }

          .cls-25 {
            fill: #4dd0e1;
          }

          .cls-26 {
            fill: #26c6da;
          }
        `}
      </style>
    </div>
  );
}
