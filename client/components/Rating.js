import React from 'react';

const Rating = ({name, score}) => {
let title = name.name
  return (
    <div className="reviewHeaderDiv">
      {title}
      {score}
    </div>
  )
};

export default Rating;