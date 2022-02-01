import React from 'react';

const NumberBar = ({ id, color }) => {
  return (
    <div data-numberbar className="numberbar">
      <div className="numberbar-id" style={{ borderColor: color }}>
        <h1>{id + 1}</h1>
      </div>
      <div className="numberbar-line"></div>
      <div
        className="numberbar-circle"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default NumberBar;
