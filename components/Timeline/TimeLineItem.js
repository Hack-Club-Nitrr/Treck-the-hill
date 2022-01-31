import React from 'react';
import NumberBar from './NumberBar';

const TimeLineItem = ({ data, id }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content" style={{ borderColor: data.color }}>
        <NumberBar id={id} color={data.color} />
        <h1 className="timeline-heading">
          <div style={{ backgroundColor: data.color }}></div>
          <p>{data.month}</p>
        </h1>

        <p className="timeline-topic" style={{ color: data.color }}>
          {data.topic}
        </p>
        <p className="timeline-para">{data.content}</p>
      </div>
    </div>
  );
};

export default TimeLineItem;
