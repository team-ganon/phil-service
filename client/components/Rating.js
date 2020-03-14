import React from 'react';

const Rating = ({name, score}) => {
  let title = name.name
  let style = {
    width: `${score * 2}0%`
  }
  return (
    <div className="ratingDiv">
      <p className='title'>{title}</p>
      <div className='ratingBarAndScore'>
        <div className='outerLineDiv'>
          <div className="innerLineDiv" style={style}></div>
        </div>
        <p className='score'>{score}</p>
      </div>
      
    </div>
  )
};

export default Rating;