import React from 'react';
import NumberBar from './NumberBar';

const TimeLineItem = ({ data, id }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <NumberBar id={id} color={data.color} />
        <h1 className="timeline-heading">
          <div style={{ backgroundColor: data.color }}></div>
          <p>{data.month}</p>
        </h1>

        <h2 className="timeline-topic" style={{ color: data.color }}>
          {data.topic}
        </h2>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default TimeLineItem;
