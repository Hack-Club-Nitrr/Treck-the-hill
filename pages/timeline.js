import React from 'react';
import styles from '../styles/timeline.module.css';
import { timeLineData } from '../components/Timeline/timeLineData';
import TimeLineItem from '../components/Timeline/TimeLineItem';
const timeline = () => {
  return (
    <div className={styles.timeline_page}>
      {/* <h1>hello</h1> */}
      <div className={styles.timeline_container}>
        <h1 className={styles.main_heading}>Event Timeline</h1>
        {timeLineData.map((data, index) => {
          if (index % 2 === 0) {
            return <TimeLineItem key={index} data={data} id={index} />;
          } else {
            return <TimeLineItem key={index} data={data} id={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default timeline;
