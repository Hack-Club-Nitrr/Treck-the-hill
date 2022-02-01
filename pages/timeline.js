import React from 'react';
import Fade from 'react-reveal/Fade';

import { timeLineData } from '../components/Timeline/timeLineData';
import TimeLineItem from '../components/Timeline/TimeLineItem';
const timeline = () => {
  return (
    <div className="timeline-page">
      {/* <h1>hello</h1> */}
      <div className="timeline-container">
        <h1 className="main-heading">Event Timeline</h1>
        {timeLineData.map((data, index) => {
          index % 2 == 0 ? (
            <Fade>
              <TimeLineItem key={index} data={data} id={index} />
            </Fade>
          ) : (
            <Fade>
              <TimeLineItem key={index} data={data} id={index} />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default timeline;
