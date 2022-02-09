import SpeakerCard from './SpeakerCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/teams.module.css';

const Speaker = () => {
  const [teamsData, setTeamsData] = useState([]);
  const [displayedTeam, setDisplayedTeam] = useState([]);

  useEffect(() => {
    axios
      .get('https://trekthehill.herokuapp.com/api/speaker/')
      .then((res) => {
        setTeamsData(res.data);
        setDisplayedTeam(res.data);
      
      })
      .catch((err) => console.log(err.response));
  }, []);

  

  return (
    <div className={styles.team}>
      <h1 className={styles.teamInt}>Speakers</h1>
      <br />
     
     
      {displayedTeam.length !== 0 && (
        <div className={styles.A}>
          {displayedTeam.map((member, preference) => {
          
            return <SpeakerCard member={member} key={preference} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Speaker;
