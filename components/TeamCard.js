import React from 'react';
import styles from '../styles/teams.module.css';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';

import { Zoom } from 'react-awesome-reveal';

const TeamCard = ({ delay, member }) => {
  return (
    <Zoom delay={delay} triggerOnce>
      <div className={styles.card_column}>
        <div className={styles.card_col_1}>
          <div className={styles.card}>
            <div className={styles.imgBox}>
              <img src={member.image} />
            </div>
            <div className={styles.content}></div>
          </div>
        </div>
        <div className={styles.card_col_2}>
          <div className={styles.details}>
            <h2>
              {member.name}
              <br />
              <span>{member.designation}</span>
            </h2>
            <ul className={styles.sci}>
              <li>
                <a href={member.facebook.length !== 0 ? member.facebook : '#'}>
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href={member.linkedin.length !== 0 ? member.linkedin : '#'}>
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a
                  href={member.instagram.length !== 0 ? member.instagram : '#'}
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href={member.email}>
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Zoom>
  );
};
export default TeamCard;
