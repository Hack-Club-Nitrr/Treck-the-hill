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
          if (index % 2 === 0) {
            return (
              <Fade>
                <TimeLineItem key={index} data={data} id={index} />
              </Fade>
            );
          } else {
            return (
              <Fade>
                <TimeLineItem key={index} data={data} id={index} />
              </Fade>
            );
          }
        })}
      </div>
    </div>
  );
};

export default timeline;
