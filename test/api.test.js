import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/components/App';
import Review from '../client/components/Review.js';
import ReviewHeader from '../client/components/ReviewsHeader';
import ReviewsNav from '../client/components/ReviewsNav';
import Rating from '../client/components/Rating';

let reviewSample = {
  '_id': '5e718b9cce115a5271351577',
  'user': '5e718b9bce115a5271351513',
  'rental': 1,
  'body': 'Cumque pariatur quisquam quibusdam non qui qui ratione. Autem ratione rerum ut id rerum voluptatem adipisci iure accusantium. Ipsum voluptas maiores occaecati quaerat est corporis omnis perspiciatis.',
  'cleanliness': 4,
  'communication': 4,
  'value': 1,
  'accuracy': 1,
  'checkIn': 4,
  'location': 4,
  'date': '2020-03-18T02:46:52.298Z',
  '__v': 0,
  'userProfile': {
    '_id': '5e718b9bce115a5271351513',
    'name': 'David Purdy',
    'imageUrl': 'https://hackreactoramazonfrontendcapstone.s3-us-west-2.amazonaws.com/1.jpeg',
    '__v': 0
  }
};

describe('Testing /api/rentals/:id', () => {

  it('Testing /api/rentals/:id', () => {
    return fetch(`http://localhost:3001/api/rentals/1`)
      .then(data => data.json())
      .then(data => expect(data[1].userProfile.name).toEqual('Rosalia Crona'))
      .catch((e) => console.log(e));
  });

  it('<App /> currentPlace state should be zero', () => {
    const wrapper = shallow(<App />);
    const currentPlaceState = wrapper.state().currentPlace;
    expect(currentPlaceState).toEqual(0);
  });

});

describe('App', () => {

  it('Review Component', () => {
    const ReviewJson = renderer.create(<Review review={reviewSample} />).toJSON();
    expect(ReviewJson).toMatchSnapshot();
  });

  it('ReviewHeader Component', () => {
    const ReviewHeaderJson = renderer.create(<ReviewHeader average={4} total={100} />).toJSON();
    expect(ReviewHeaderJson).toMatchSnapshot();
  });

  it('ReviewsNav Component', () => {
    const ReviewsNavJson = renderer.create(<ReviewsNav currentPlace={0} reviews={20} />).toJSON();
    expect(ReviewsNavJson).toMatchSnapshot();
  });

  it('Rating Component', () => {
    const RatingJson = renderer.create(<Rating name={{name: 'Cleanliness'}} score={3} />).toJSON();
    expect(RatingJson).toMatchSnapshot();
  });
  
});

