import React from 'react';
import styles from '../styles/footer.module.css';
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsDribbble,
  BsLinkedin,
  BsDiscord,
} from 'react-icons/bs';
export const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.tth}>
          <img src="/trekthehill.svg" alt="logo" />
          <h2>Trek The Hill 2022</h2>
        </div>
        <div className={styles.div_wrap}>
          <div className={styles.col1}>
            <img
              src="/hackclub.png"
              style={{ width: '60px', margin: '10px auto' }}
              alt="logo"
            />
            <div className={styles.icon_cont}>
              <div className={styles.pinkhover}>
                <a href="https://www.linkedin.com/company/hack-club-nitrr/about/">
                  <BsLinkedin />
                </a>
              </div>
              <div className={styles.pinkhover}>
                <a href="https://discord.gg/7mtF8tkt">
                  <BsDiscord />
                </a>
              </div>
              <div className={styles.pinkhover}>
                <a href="https://www.instagram.com/hack_club_nitrr/">
                  <BsInstagram />
                </a>
              </div>
              <div className={styles.pinkhover}>
                <a href="#contact">
                  <BsTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <img
              src="/cyberjunk.png"
              alt="logo"
              style={{ width: '60px', margin: '10px auto' }}
            />

            <div className={styles.icon_cont}>
              <div className={styles.pinkhover}>
                <a href="https://www.linkedin.com/company/cyber-junk">
                  <BsLinkedin />
                </a>
              </div>
              <div className={styles.pinkhover}>
                <a href="https://discord.gg/ZmCmkw2enz">
                  <BsDiscord />
                </a>
              </div>
              <div className={styles.pinkhover}>
                <a href="https://www.instagram.com/cyber.junk_/">
                  <BsInstagram />
                </a>
              </div>
              <div className={styles.pinkhover}>
                <a href="https://twitter.com/CyberJunk_">
                  <BsTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />© 2022 Trek The Hill
        <br />
      </div>
    </div>
  );
};
