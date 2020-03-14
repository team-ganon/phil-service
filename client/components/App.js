import React, { Component } from 'react';
import ReviewsNav from './ReviewsNav';
import ReviewsHeader from './ReviewsHeader';
import Review from './Review';
import Rating from './Rating';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      currentReviews: [],
      total: 0,
      average: 0,
      error: false,
      cleanliness: 0,
      communication: 0,
      value: 0,
      accuracy: 0,
      checkIn: 0,
      location: 0
    }
  }

  componentDidMount() {
    let endPoint = window.location.href.split('=');
    console.log(endPoint)
    fetch(`http://localhost:3001/api/rentals/${endPoint[1]}`)
      .then(response => response.json())
      .then(reviews => {
        console.log(reviews)
        let length = reviews.length;
        let cleanliness = 0; 
        let communication = 0; 
        let value = 0; 
        let accuracy = 0;
        let checkIn = 0;
        let location = 0;
        for (let i = 0; i < reviews.length; i++) {
          cleanliness += reviews[i].cleanliness;
          communication += reviews[i].communication;
          value += reviews[i].value;
          accuracy += reviews[i].accuracy;
          checkIn += reviews[i].checkIn;
          location += reviews[i].location;
        }
        cleanliness = Math.ceil(cleanliness / length);
        communication = Math.ceil(communication / length);
        value = Math.ceil(value / length);
        accuracy = Math.ceil(accuracy / length);
        checkIn = Math.ceil(checkIn / length);
        location = Math.ceil(location / length);
        let average = Math.ceil(((cleanliness + communication + value + accuracy + checkIn + location) / 6));
        this.setState({
          reviews: reviews,
          currentReviews: reviews.slice(0, 8),
          average: average,
          total: length,
          cleanliness: cleanliness,
          communication: communication,
          value: value,
          accuracy: accuracy,
          checkIn: checkIn,
          location: location
        })
      })
      .catch(e => this.setState({
        error: true
      }))
  }

  render() {
    return (
      <div className="app">
        <ReviewsHeader 
          average={this.state.average}
          total={this.state.total}
        />
        <div className='ratingHolderDiv'>
          <Rating name={{name: "Cleanliness"}}score={this.state.cleanliness}/>
          <Rating name={{name: "Communication"}}score={this.state.cleanliness}/>
          <Rating name={{name: "Value"}}score={this.state.cleanliness}/>
          <Rating name={{name: "Accuracy"}}score={this.state.cleanliness}/>
          <Rating name={{name: "Check-in"}}score={this.state.cleanliness}/>
          <Rating name={{name: "Location"}}score={this.state.cleanliness}/>
        </div>
        {this.state.currentReviews.map((review, i) => <Review review={review} key={i} />)}
      </div>
    )
  }
}

export default App;