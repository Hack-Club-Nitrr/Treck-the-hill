import React from 'react';
import NumberBar from './NumberBar';
import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/timeline.module.css';
import moment from 'moment';
import { useState, useEffect, useRef } from 'react';

const TimeLineItem = ({ data, id }) => {
  const desc = useRef(null);

  const [status, setStatus] = useState('read more');

  useEffect(() => {
    desc.current.style.textOverflow = 'ellipsis';
    desc.current.style.overflow = 'hidden';
    desc.current.style.whiteSpace = 'nowrap';
  }, []);
  const readmore = () => {
    if (status === 'read more') {
      desc.current.style.textOverflow = 'initial';
      desc.current.style.overflow = 'initial';
      desc.current.style.whiteSpace = '';
      setStatus('read less');
    } else {
      desc.current.style.textOverflow = 'ellipsis';
      desc.current.style.overflow = 'hidden';
      desc.current.style.whiteSpace = 'nowrap';
      setStatus('read more');
    }
  };
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
        <p className={styles.timeline_para} ref={desc}>
          {data.description}
        </p>
        <div className={styles.btn_container}>
          <button
            className={styles.readmore}
            onClick={() => {
              readmore();
            }}
          >
            {status}
          </button>
        </div>
        {/* <p
          className={styles.timeline_para}
          dangerouslySetInnerHTML={{ __html: data.description }}
        /> */}
      </div>
      {/* </div> */}
    </Fade>
  );
};

export default TimeLineItem;
