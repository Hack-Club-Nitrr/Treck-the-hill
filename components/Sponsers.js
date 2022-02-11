import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { SimpleGrid, Box } from '@chakra-ui/react';
import styles from '../styles/sponsers.module.css';

export const Sponsers = () => {
  const [sponsers, setSponsers] = useState([]);
  const [diamond, setDiamond] = useState([]);
  const [silver, setSilver] = useState([]);
  const [gold, setGold] = useState([]);
  const [platinum, setPlatinum] = useState([]);
  const [bronze, setBronze] = useState([]);

  useEffect(() => {
    axios
      .get('https://trekthehill.herokuapp.com/api/sponser/')
      .then((response) => {
        var diamond = response.data.filter(
          (category) => category.category === 'diamond'
        );
        var platinum = response.data.filter(
          (category) => category.category === 'platinum'
        );
        var gold = response.data.filter(
          (category) => category.category === 'gold'
        );
        var silver = response.data.filter(
          (category) => category.category === 'silver'
        );
        var bronze = response.data.filter(
          (category) => category.category === 'bronze'
        );
        setSponsers(response.data);
        setDiamond(diamond);
        setPlatinum(platinum);
        setSilver(silver);
        setGold(gold);
        setBronze(bronze);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className={styles.sponsers}>
      <br />
      <br />
      <div className={styles.heading}>
        <p>Our Sponsors</p>
        <br />
      </div>
      <div className={styles.spons_container}>
        {diamond.map((sponser, ind) => {
          return (
            <div className={styles.diamond} key={sponser.name}>
              <a href={sponser.link}>
                <img src={sponser.image} alt={sponser.name} />
                {/* <div className={styles.spons_name}>{sponser.name}</div> */}
              </a>
            </div>
          );
        })}
      </div>

      <div className={styles.spons_container}>
        {platinum.map((sponser) => {
          return (
            <div className={styles.platinum} key={sponser.name}>
              <img src={sponser.image} alt={sponser.name} />
            </div>
          );
        })}
      </div>
      <div className={styles.spons_container}>
        {gold.map((sponser) => {
          return (
            <div className={styles.gold} key={sponser.name}>
              <img src={sponser.image} alt={sponser.name} />
            </div>
          );
        })}
      </div>
      <div className={styles.spons_container}>
        {silver.map((sponser) => {
          return (
            <div className={styles.silver} key={sponser.name}>
              <img src={sponser.image} alt={sponser.name} />
            </div>
          );
        })}
      </div>
      <div className={styles.spons_container}>
        {bronze.map((sponser) => {
          return (
            <div className={styles.bronze} key={sponser.name}>
              <img src={sponser.image} alt={sponser.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
