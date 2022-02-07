import TeamCard from './TeamCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/teams.module.css';

const Teams = () => {
  const [teamsData, setTeamsData] = useState([]);
  const [displayedTeam, setDisplayedTeam] = useState([]);

  useEffect(() => {
    axios
      .get('https://trekthehill.herokuapp.com/api/team/')
      .then((res) => {
        setTeamsData(res.data);
        setDisplayedTeam(res.data.filter((member) => member.domain === 'lead'));
      })
      .catch((err) => console.log(err.response));
  }, []);

  const handleClick = (e) => {
    setDisplayedTeam(
      teamsData.filter((member) => member.domain === e.target.name)
    );
  };

  return (
    <div className={styles.team}>
      <h1 className={styles.teamInt}>Meet Our Team</h1>
      <br />
      {displayedTeam.length !== 0 && (
        <div className={styles.toggleButton}>
          <button
            onClick={handleClick}
            name="lead"
            className={`${
              displayedTeam[0].domain === 'lead' && styles.buttonBorder
            } ${styles.btn}`}
          >
            LEAD
          </button>
          <button
            onClick={handleClick}
            name="web"
            className={`${
              displayedTeam[0].domain === 'web' && styles.buttonBorder
            } ${styles.btn}`}
          >
            WEB
          </button>
          <button
            onClick={handleClick}
            name="design"
            className={`${
              displayedTeam[0].domain === 'design' && styles.buttonBorder
            } ${styles.btn}`}
          >
            DESIGN
          </button>
          <button
            onClick={handleClick}
            name="documentation"
            className={`${
              displayedTeam[0].domain === 'documentation' && styles.buttonBorder
            } ${styles.btn}`}
          >
            DOCS
          </button>
          <button
            onClick={handleClick}
            name="sponsership"
            className={`${
              displayedTeam[0].domain === 'sponsership' && styles.buttonBorder
            } ${styles.btn}`}
          >
            SPONSERSHIP
          </button>
        </div>
      )}
      {displayedTeam.length !== 0 && (
        <div className={styles.A}>
          {displayedTeam.map((member, ind) => {
            return <TeamCard member={member} key={ind} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Teams;
