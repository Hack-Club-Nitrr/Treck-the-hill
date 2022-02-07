import React from 'react';
import styles from '../styles/teams.module.css';
import Tilt from 'react-parallax-tilt'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';
import { SimpleGrid, Box } from '@chakra-ui/react';

const TeamCard = ({ member }) => {
  return (
    <Zoom delay={delay} triggerOnce>
     
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ width: '100px' }}>
          <div className={styles.card}>
          <Tilt
                  className="tilt"
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={40}
                  perspective={1000}
                  transitionSpeed={1000}
                  gyroscope={true}
                  glareEnable={true} glareMaxOpacity={0.8} glareColor="#adb2b8"  glareBorderRadius="20px"
                  scale={1.5}
                  >
            <div className={styles.imgBox}>
              <img src={member.image} />
            </div>
            </Tilt>
            <div className={styles.content}></div>
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <div style={{ width: '100px' }}>
        <div className={styles.card}>
          <div className={styles.imgBox}>
            <img src={member.image} />
          </div>
          <div className={styles.content}></div>
        </div>
      </div>
      <div style={{ float: 'right', marginLeft: '20px' }}>
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
              <a href={member.instagram.length !== 0 ? member.instagram : '#'}>
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
  );
};
export default TeamCard;
