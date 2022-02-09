import SpeakerCard from './SpeakerCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/teams.module.css';

const Speaker = () => {
  const [displayedSpeaker, setDisplayedSpeaker] = useState([]);

  useEffect(() => {
    axios
      .get('https://trekthehill.herokuapp.com/api/speaker/')
      .then((res) => {
        var speakers = res.data;

        for (let i = 0; i < speakers.length; i++) {
          for (let j = 0; j < speakers.length - i - 1; j++) {
            if (
              parseInt(speakers[j + 1].preference) <
              parseInt(speakers[j].preference)
            ) {
              [speakers[j + 1], speakers[j]] = [speakers[j], speakers[j + 1]];
            }
          }
        }
        setDisplayedSpeaker(speakers);
        console.log(speakers);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div className={styles.team}>
      <h1 className={styles.teamInt}>Speakers</h1>
      <br />

      {displayedSpeaker.length !== 0 && (
        <div className={styles.A}>
          {displayedSpeaker.map((member, preference) => {
            return <SpeakerCard member={member} key={preference} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Speaker;
