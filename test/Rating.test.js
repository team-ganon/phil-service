import React from 'react';
import renderer from 'react-test-renderer';
import Rating from '../client/components/Rating';


describe('Rating Component', () => {

  it('Rating SnapShot Test', () => {
    const RatingJson = renderer.create(<Rating name={{name: 'Cleanliness'}} score={3} />).toJSON();
    expect(RatingJson).toMatchSnapshot();
  });
  
});

