import React from 'react';
import renderer from 'react-test-renderer';
import Review from '../client/components/Review.js';

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

describe('Rating Component', () => {

  it('Review SnapShot Test', () => {
    const ReviewJson = renderer.create(<Review review={reviewSample} />).toJSON();
    expect(ReviewJson).toMatchSnapshot();
  });
  
});

