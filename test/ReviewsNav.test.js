import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsNav from '../client/components/ReviewsNav';

describe('ReviewsNav Component', () => {

  it('ReviewsNav SnapShot Test', () => {
    const ReviewsNavJson = renderer.create(<ReviewsNav currentPlace={0} reviews={20} />).toJSON();
    expect(ReviewsNavJson).toMatchSnapshot();
  });
  
});

