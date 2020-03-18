import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsHeader from '../client/components/ReviewsHeader';

describe('ReviewsHeader Component', () => {

  it('ReviewsHeader SnapShot Test', () => {
    const ReviewsHeaderJson = renderer.create(<ReviewsHeader average={4} total={100} />).toJSON();
    expect(ReviewsHeaderJson).toMatchSnapshot();
  });
  
});

