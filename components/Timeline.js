import React from 'react';
import styles from '../styles/timeline.module.css';
import { timeLineData } from '../components/Timeline/timeLineData';
import TimeLineItem from '../components/Timeline/TimeLineItem';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export const Timeline = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('https://trekthehill.herokuapp.com/api/event/')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className={styles.timeline_page}>
      {/* <h1>hello</h1> */}
      <div className={styles.timeline_container}>
        <h1
          className="heading"
          style={{ fontSize: '24px', marginBottom: '30px' }}
        >
          Event Timeline
        </h1>
        {events.map((data, index) => {
          if (index % 2 === 0) {
            return <TimeLineItem key={index} data={data} id={index} />;
          } else {
            return <TimeLineItem key={index} data={data} id={index} />;
          }
        })}
      </div>
      <style jsx>
        {`
          .heading {
            font-family: 'Press Start 2P', cursive;
            font-size: 40px;
            color: rgb(160, 200, 89);
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};
