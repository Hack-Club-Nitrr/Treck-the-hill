import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export const Sponsers = () => {
  const [sponsers, setSponsers] = useState([]);
  const [diamond, setdiamond] = useState([]);
  const [silver, setSilver] = useState([]);
  const [gold, setGold] = useState([]);
  const [platinum, setPlatinum] = useState([]);
  const [bronze, setBronze] = useState([]);

  useEffect(() => {
    const cat1 = axios
      .get('https://trekthehill.herokuapp.com/api/sponser/')
      .then((response) => {
        setSponsers(response.data);

        for (var i = 0; i < sponsers.length; i++) {
          if (sponsers[i].category === 'diamond') {
            setdiamond();
          }
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {/* <div className="specialSponsers" style={bgStyle}>
        <div className="platinum">{platinumSponsers}</div>
        <div className="gold">{goldSponsers}</div>
        <div className="silver">{silverSponsers}</div>
        <div className="general">{generalSponsers}</div>
      </div> */}
    </div>
  );
};
