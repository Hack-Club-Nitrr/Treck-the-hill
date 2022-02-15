import React from 'react';
import NumberBar from './NumberBar';
import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/timeline.module.css';
import moment from 'moment';

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
          <p>{moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </h1>

        <p
          className={styles.timeline_topic}
          style={{ color: 'rgb(0, 247, 255)' }}
        >
          {data.title}
        </p>
        <p className={styles.timeline_para}>{data.description}</p>
      </div>
      {/* </div> */}
    </Fade>
  );
};

export default TimeLineItem;
