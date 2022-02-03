import React from 'react';
import Star from './Star';
const Stars = () => {
  let stars = [];
  for (let i = 0; i < 400; i++) {
    stars.push(<Star key={i} />);
  }
  return <div>{stars}</div>;
};

export default Stars;
