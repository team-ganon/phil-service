import React from 'react';
import styles from '../CSS/rating.css';

const Rating = ({name, score}) => {
  let title = name.name;
  let style = {
    width: `${score * 2}0%`
  };
  return (
    <div className={styles.ratingDiv}>
      <p className={styles.title}>{title}</p>
      <div className={styles.ratingBarAndScore}>
        <div className={styles.outerLineDiv}>
          <div className={styles.innerLineDiv} style={style}></div>
        </div>
        <p className={styles.score}>{score}</p>
      </div>
    </div>
  );
};

export default Rating;