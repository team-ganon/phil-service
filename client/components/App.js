import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      currentReviews: [],
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
    fetch(`http://localhost:3001/api/rentals/4`)
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
        cleanliness = Math.floor(cleanliness / length);
        communication = Math.floor(communication / length);
        value = Math.floor(value / length);
        accuracy = Math.floor(accuracy / length);
        checkIn = Math.floor(checkIn / length);
        location = Math.floor(location / length);
        this.setState({
          reviews: reviews,
          currentReviews: reviews.slice(0, 8),
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
    dsfbvdfsbvsdfbdfsb
      </div>
    )
  }
}

export default App;