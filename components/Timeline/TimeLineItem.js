import React from 'react';
import NumberBar from './NumberBar';
import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/timeline.module.css';

const TimeLineItem = ({ data, id }) => {
  return (
    <Fade triggerOnce className={styles.timeline_item}>
      {/* <div className={styles.timeline_item}> */}
      <div className={styles.timeline_content} style={{ borderColor: 'green' }}>
        <NumberBar id={id} color={'green'} />
        <img
          src={data.image}
          alt="event_poster"
          className={styles.timeline_image}
        />
        <h1 className={styles.timeline_heading}>
          <div style={{ backgroundColor: 'green' }}></div>
          <p>{data.date}</p>
        </h1>

        <p className={styles.timeline_topic} style={{ color: 'green' }}>
          {data.title}
        </p>
        <p className={styles.timeline_para}>{data.description}</p>
      </div>
      {/* </div> */}
    </Fade>
  );
};

export default TimeLineItem;
