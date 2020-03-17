import React from 'react';
import {format, parseISO} from 'date-fns';



const Review = ({review}) => {
  var result = format(
    parseISO(review.date),
    'MMMM yyyy'
  );
  return (
    <div className="reviewOuterDiv">
      <div className='topOfReview'>
        <img className='image' height="48" width="48" src={review.userProfile.imageUrl} />
        <div className='nameDate'>
          <p>{review.userProfile.name}</p>
          <p className='date'>{result}</p>
        </div>
      </div>
      <p className='reviewParagraph'>{review.body}</p>
    </div>
  );
};

export default Review;