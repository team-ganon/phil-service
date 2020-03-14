import React from 'react';
//import moment from 'moment';

const ReviewsHeader = ({average, total}) => {
  return (
    <div className="reviewHeaderDiv">
      <h2 className='reviewsHeaderH2'>Reviews</h2>
      <div className="bottomDivOfHeader">

        <div className="containerForStarReviews">
            <div className='star'>
              <ion-icon name="star"></ion-icon>
              <p className='averageTotal'>{average}</p>
            </div>
            <p className="total average"><span className='reviewCount'>{total}</span> reviews</p>
        </div>
          
        <div className='search'>
          <input type='text' placeholder='Search Reviews'/>

            <ion-icon name="search-outline"></ion-icon>
  

        </div>
        
      </div>
    </div>
  )
};

export default ReviewsHeader;