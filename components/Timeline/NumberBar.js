import React from 'react';
import styles from '../../styles/timeline.module.css';

const NumberBar = ({ id, color }) => {
  return (
    <div data-numberbar className={styles.numberbar}>
      <div className={styles.numberbar_id} style={{ borderColor: color }}>
        <h1>{id + 1}</h1>
      </div>
      <div className={styles.numberbar_line}></div>
      <div
        className={styles.numberbar_circle}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default NumberBar;
