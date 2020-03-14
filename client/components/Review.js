import React from 'react';
//import moment from 'moment';

const Review = ({review}) => {
  console.log(review)
  return (
    <div className="reviewOuterDiv">
      <div>
        <img className='image' height="48" width="48" src={review.userProfile.imageUrl} />
      </div>
    </div>
  ) 
};

export default Review;