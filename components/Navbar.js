import React from 'react';
import { useRef } from 'react';
import { BiAlignLeft } from 'react-icons/bi';
import { GiCrossedAxes } from 'react-icons/gi';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const topnav = useRef(null);

  useEffect(() => {
    if (scrollPosition < 1000) {
      topnav.current.style.backdropFilter = ' blur(0px)';
    } else {
      topnav.current.style.backdropFilter = ' blur(10px)';
    }
  }, [scrollPosition]);
  const momenu = useRef(null);

  const showMenu = () => {
    momenu.current.style.opacity = '1';
    momenu.current.style.zIndex = '1000';
  };
  const closeMenu = () => {
    momenu.current.style.opacity = '0';
    momenu.current.style.zIndex = '-1';
  };

  return (
    <div>
      <div className="momenu" ref={momenu} id="momenu">
        <div
          className="closebtn"
          onClick={() => {
            closeMenu();
          }}
        >
          <GiCrossedAxes size={40} />
        </div>
        <div className="mo_link">
          <a href="#about">About</a>
        </div>
        <div className="mo_link">
          <a href="#events">Events</a>
        </div>
        <div className="mo_link">
          <a href="#social_media">Social Media</a>
        </div>
        <div className="mo_link">
          <a href="#team">Team</a>
        </div>
        <div className="mo_link">
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="topnav" id="topnav" ref={topnav}>
        <div className="left"></div>
        <div className="center">
          <div className="link">
            <a href="#about">About</a>
          </div>
          <div className="link">
            <a href="#events">Events</a>
          </div>
          <div className="link">
            <a href="#social_media">Social Media</a>
          </div>
          <div className="link">
            <a href="#team">Team</a>
          </div>
          <div className="link">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="right">
          <div className="icons"></div>
          <div className="icons"></div>
          <div
            className="icons toggleIcon "
            onClick={() => {
              showMenu();
            }}
          >
            <BiAlignLeft size={50} color="white" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .topnav {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            font-family: 'Montserrat', sans-serif;
            z-index: 100;
            width: 100%;
            transition: 0.4s ease-out;
          }

          .left {
            width: 20%;
            padding: 20px 20px;
          }
          .center {
            width: 60%;
            display: flex;
            justify-content: space-around;
            text-transform: uppercase;
            font-weight: 700;
            padding: 20px 20px;
            color: rgb(37, 37, 37);
          }
          .right {
            width: 20%;
            display: flex;
            justify-content: right;
            padding: 10px 20px;
            color: rgb(37, 37, 37);
          }
          .link {
            transition: 0.1s ease-in-out;
            cursor: pointer;
            color: #ffffffbd;
          }
          .link:hover {
            border-bottom: #4dff00;
            margin-top: -2px;
            color: rgb(160, 200, 89);
          }
          .icons {
            padding: 0px 15px;
          }

          .momenu {
            display: none;
          }

          @media screen and (max-width: 767px) {
            .number {
              font-size: 90px;
              font-weight: 900;
            }

            .a_head {
              font-size: 40px;
              letter-spacing: 2px;
            }
            .a_content {
              width: 80%;
              margin-top: 30px;
            }

            .herohead {
              font-size: 50px;
              margin-top: 80px;
              color: rgb(236, 247, 255);
              text-shadow: 2px 2px 8px #ae00ff94;
            }

            .herodesc {
              color: rgb(255, 0, 0);
              backdrop-filter: blur(2px);
              font-weight: 600;
              display: none;
            }

            .herobtn {
              position: absolute;
              left: 10%;
              bottom: -140px;
              padding: 10px 40px;
              margin: 40px auto;
              float: right;
            }
            .center {
              display: none;
            }
            .right {
              width: 100%;
              font-size: 20px;
              padding-top: 20px;
            }
            .momenu {
              display: block;
              position: fixed;
              top: 0;
              left: 0;
              background: black;
              width: 100%;
              height: 100%;
              padding-top: 70px;
              transition: 0.4s ease-in-out;
              opacity: 0;
            }
            .closebtn {
              font-size: 30px;
              color: white;
              position: absolute;
              top: 25px;
              right: 35px;
            }
            .mo_link {
              color: white;
              display: block;
              padding: 10px 20px;
              font-size: 20px;
              text-transform: capitalize;
              border-bottom: 1px solid rgb(51, 51, 51);
            }
          }

          @media only screen and (min-width: 768px) {
            .toggleIcon {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};
