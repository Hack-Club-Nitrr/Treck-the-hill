import React from 'react';
import styles from '../styles/teams.module.css';
import Tilt from 'react-parallax-tilt';
import {
 
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from 'react-icons/ai';
import { SimpleGrid, Box } from '@chakra-ui/react';

const SpeakerCard = ({ delay, member }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginBottom: '20px',
      }}
    >
      <div

      style={{
        display: 'flex',
        justifyContent : 'center',
      }}
      
      >
        
          <Tilt
          style={{
            width: 150,
            height: 150
            }}
            className="tilt"
            tiltMaxAngleX={20}
            tiltMaxAngleY={40}
            perspective={1000}
            transitionSpeed={1000}
            gyroscope={false}
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="#adb2b8"
            glareBorderRadius="500px"
            scale={1.1}
          >
        <div className={styles.card}>
            <div className={styles.imgBox}>
              <img src={member.image} />
            </div>
          <div className={styles.content}></div>
        </div>
          </Tilt>
      </div>
      <div>
        <div className={styles.details}>
          <h2>
            {member.name}
            <br />
            <span>{member.designation}</span>
          </h2>
          <ul className={styles.sci}>
           
            <li>
              <a href={member.linkedin.length !== 0 ? member.linkedin : '#'}>
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href={member.github.length !== 0 ? member.github : '#'}>
                <AiFillGithub />
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
export default SpeakerCard;
