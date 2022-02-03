import React from 'react';
import {useRef} from 'react';


    
export const Navbar = () => {
const momenu = useRef(null)

    const showMenu = () => {
        momenu.current.style.opacity = "1";
        momenu.current.style.zIndex = "1000";
        alert("this is");
    };
    const closeMenu = () => {
        alert("this is");
      momenu.current.style.opacity = "0";
      momenu.current.style.zIndex = "-1";
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
        close
      </div>
      <div className="mo_link">home</div>
      <div className="mo_link">pages</div>
      <div className="mo_link">portfolio</div>
      <div className="mo_link">headers</div>
      <div className="mo_link">elements</div>
      <div className="mo_link">blog</div>
    </div>
    <div className="topnav" id="topnav">
      <div className="left">
        
      </div>
      <div className="center">
        <div className="link">home</div>
        <div className="link">pages</div>
        <div className="link">portfolios</div>
        <div className="link">headers</div>
        <div className="link">elements</div>
        <div className="link">blog</div>
      </div>
      <div className="right">
        <div className="icons">
          
        </div>
        <div className="icons">
        
        </div>
        <div
          className="icons"
          onClick={() => {
            showMenu();
          }}
        >
         open
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
            font-family: "Montserrat", sans-serif;
            background: rgba(251, 245, 252, 0);
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
            padding: 30px 20px;
            color: rgb(37, 37, 37);
          }
          .right {
            width: 20%;
            display: flex;
            justify-content: right;
            padding: 30px 20px;
            color: rgb(37, 37, 37);
          }
          .link {
            transition: 0.1s ease-in-out;
            cursor: pointer;
            color: white;
          }
          .link:hover {
            color: var(--lightpink);
            border-bottom: 2px solid var(--lightpink);
            margin-top: -2px;
          }
          .icons {
            padding: 0px 15px;
          }

          .momenu{
              display:none;
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
    }
    .closebtn {
      font-size: 30px;
      color: white;
      position: absolute;
      top: 10px;
      right: 20px;
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
        `}
      </style>


  </div>
  );
};


