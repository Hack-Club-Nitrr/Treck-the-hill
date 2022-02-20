import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { FiDownload } from 'react-icons/fi';
import styles from '../styles/sponsers.module.css';

export const Sponsers = () => {
  const [sponsers, setSponsers] = useState([]);
  const [diamond, setDiamond] = useState([]);
  const [silver, setSilver] = useState([]);
  const [gold, setGold] = useState([]);
  const [platinum, setPlatinum] = useState([]);
  const [bronze, setBronze] = useState([]);
  const [community, setCommunity] = useState([]);

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
        var community = response.data.filter(
          (category) => category.category === 'community_partner'
        );
        console.log(response);
        setSponsers(response.data);
        setDiamond(diamond);
        setPlatinum(platinum);
        setSilver(silver);
        setGold(gold);
        setBronze(bronze);
        setCommunity(community);
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
              <a target="_blank" rel="noreferrer" href={sponser.link}>
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
              <a target="_blank" rel="noreferrer" href={sponser.link}>
                <img src={sponser.image} alt={sponser.name} />
              </a>
            </div>
          );
        })}
      </div>
      <div className={styles.spons_container}>
        {gold.map((sponser) => {
          return (
            <div className={styles.gold} key={sponser.name}>
              <a target="_blank" rel="noreferrer" href={sponser.link}>
                <img src={sponser.image} alt={sponser.name} />
              </a>
            </div>
          );
        })}
      </div>
      <div className={styles.spons_container}>
        {silver.map((sponser) => {
          return (
            <div className={styles.silver} key={sponser.name}>
              <a target="_blank" rel="noreferrer" href={sponser.link}>
                <img src={sponser.image} alt={sponser.name} />
              </a>
            </div>
          );
        })}
      </div>
      <div className={styles.spons_container}>
        {bronze.map((sponser) => {
          return (
            <div className={styles.bronze} key={sponser.name}>
              <a target="_blank" rel="noreferrer" href={sponser.link}>
                <img src={sponser.image} alt={sponser.name} />
              </a>
            </div>
          );
        })}
      </div>
      <br />
      <div className={styles.heading}>
        <p>Community Partners</p>
        <br />
      </div>
      <div className={styles.spons_container}>
        {community.map((sponser) => {
          return (
            <div className={styles.bronze} key={sponser.name}>
              <a target="_blank" rel="noreferrer" href={sponser.link}>
                <img src={sponser.image} alt={sponser.name} />
              </a>
            </div>
          );
        })}
      </div>
      <div className={styles.btn_container}>
        <h4>Click here to download our Sponsorship Brochure</h4>
        <button className={styles.btn}>
          <a
            href="https://drive.google.com/file/d/17nr2ZE9PIsTD7w2yxUtr6fydVf1vDE4Y/view"
            target="_blank"
            rel="noreferrer"
          >
            <FiDownload styles={{ marginTop: '7px' }} />
          </a>
        </button>
      </div>
    </div>
  );
};
