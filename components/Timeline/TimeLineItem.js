import React from 'react';
import NumberBar from './NumberBar';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/timeline.module.css';

const TimeLineItem = ({ data, id }) => {
  return (
    <Fade>
    <div className={styles.timeline_item}>
      <div className={styles.timeline_content} style={{ borderColor: data.color }}>
        <NumberBar id={id} color={data.color} />
        <h1 className={styles.timeline_heading}>
          <div style={{ backgroundColor: data.color }}></div>
          <p>{data.month}</p>
        </h1>

        <p className={styles.timeline_topic} style={{ color: data.color }}>
          {data.topic}
        </p>
        <p className={styles.timeline_para}>{data.content}</p>
      </div>
    </div>
    </Fade>
  );
};

export default TimeLineItem;
