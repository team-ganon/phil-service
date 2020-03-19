import React from 'react';
import style from '../CSS/reviewheader.css';

const ReviewsHeader = ({average, total}) => {
  return (
    <div className={style.reviewHeaderDiv}>
      <h2 className={style.reviewsHeaderH2}>Reviews</h2>
      <div className={style.bottomDivOfHeader}>
        <div className={style.containerForStarReviews}>
          <div className={style.star}>
            <ion-icon name="star"></ion-icon>
            <p className={style.averageTotal}>{average}</p>
          </div>
          <p className={style.average}><span className={style.reviewCount}>{total}</span> reviews</p>
        </div>   
        <div className={style.search}>
          <input type='text' placeholder='Search Reviews'/>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default ReviewsHeader;