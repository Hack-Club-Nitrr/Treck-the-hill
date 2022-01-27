import React from 'react';

import { timeLineData } from '../components/Timeline/timeLineData';
import TimeLineItem from '../components/Timeline/TimeLineItem';
const timeline = () => {
  return (
    <div className="timeline-page">
      {/* <h1>hello</h1> */}
      <div className="timeline-container">
        {timeLineData.map((data, index) => (
          <TimeLineItem key={index} data={data} id={index} />
        ))}
      </div>
    </div>
  );
};

export default timeline;
