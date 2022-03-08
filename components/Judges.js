import JudgesCard from './JudgesCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/teams.module.css';

const Judges = () => {
  const [displayedSpeaker, setDisplayedSpeaker] = useState([]);

  useEffect(() => {
    axios
      .get('https://trekthehill.herokuapp.com/api/judge/')
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
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div className={styles.team}>
      <h1 className={styles.teamInt}>Judges</h1>
      <br />

      {displayedSpeaker.length !== 0 && (
        <div className={styles.A}>
          {displayedSpeaker.map((member, preference) => {
            return <JudgesCard member={member} key={preference} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Judges;
