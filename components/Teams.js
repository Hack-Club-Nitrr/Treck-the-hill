import TeamCard from './TeamCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/teams.module.css';

const Teams = () => {
  const [toggler, setToggler] = useState(true);
  const [teamsData, setTeamsData] = useState([]);

  useEffect(() => {
    axios
      .get('https://trekthehill.herokuapp.com/api/team/')
      .then((res) => setTeamsData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.team}>
      <h1 className={styles.teamInt}>Meet Our Team</h1>
      <div className={styles.toggleButton}>
        <button
          onClick={() => setToggler(!toggler)}
          className={`${toggler && styles.buttonBorder} ${styles.btn}`}
        >
          HACK CLUB
        </button>
        <button
          onClick={() => setToggler(!toggler)}
          className={`${!toggler && styles.buttonBorder} ${styles.btn}`}
        >
          CYBER JUNK
        </button>
      </div>
      {toggler && (
        <div className={styles.A}>
          {teamsData.map((member, ind) => {
            return (
              <TeamCard delay={(ind + 1) * 500} member={member} key={ind} />
            );
          })}
          {teamsData.map((member, ind) => {
            return (
              <TeamCard delay={(ind + 1) * 500} member={member} key={ind} />
            );
          })}
          {teamsData.map((member, ind) => {
            return (
              <TeamCard delay={(ind + 1) * 500} member={member} key={ind} />
            );
          })}
          {teamsData.map((member, ind) => {
            return (
              <TeamCard delay={(ind + 1) * 500} member={member} key={ind} />
            );
          })}
          {teamsData.map((member, ind) => {
            return (
              <TeamCard delay={(ind + 1) * 500} member={member} key={ind} />
            );
          })}
        </div>
      )}
      {!toggler && (
        <div className={styles.B}>
          {teamsData.map((member, ind) => {
            return (
              <TeamCard delay={(ind + 1) * 500} member={member} key={ind} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Teams;
