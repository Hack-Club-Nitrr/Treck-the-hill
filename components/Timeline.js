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
          style={{ fontSize: '34px', marginBottom: '30px' }}
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
          @import url('https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap');

          .heading {
            text-align: center;
            font-family: 'Nova Mono', monospace;
            font-size: 34px;
            color: rgb(26 188 156);
            margin-bottom: 30px;
            text-shadow: 0 0 10px rgb(26 188 156);
          }
        `}
      </style>
    </div>
  );
};
