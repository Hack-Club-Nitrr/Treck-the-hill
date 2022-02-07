import React from 'react';
import styles from '../styles/footer.module.css';
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsDribbble,
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
                <BsFacebook />
              </div>
              <div className={styles.pinkhover}>
                <BsTwitter />
              </div>
              <div className={styles.pinkhover}>
                <BsInstagram />
              </div>
              <div className={styles.pinkhover}>
                <BsPinterest />
              </div>
              <div className={styles.pinkhover}>
                <BsDribbble />
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
                <BsFacebook />
              </div>
              <div className={styles.pinkhover}>
                <BsTwitter />
              </div>
              <div className={styles.pinkhover}>
                <BsInstagram />
              </div>
              <div className={styles.pinkhover}>
                <BsPinterest />
              </div>
              <div className={styles.pinkhover}>
                <BsDribbble />
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
