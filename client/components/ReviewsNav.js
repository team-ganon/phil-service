import React, { Component } from 'react';

class ReviewsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: 0,
      currentButtons: [],
      currentButton: 1
    };
  }

  componentDidMount() {
    let numberOfButtons = Math.floor((this.props.reviews.length - 1) / 7);
    this.setState({
      buttons: numberOfButtons,
      currentButtons: [1, 2, 3, 4]
    });
  }

  changeForward() {
    this.setState({
      currentButton: this.state.currentButton += 1
    });
    if ((this.props.reviews.length - this.props.currentPlace) < 20 ) {
      let lastReviws = this.props.reviews.slice(this.props.currentPlace);
      console.log(lastReviws);
      let value = this.state.currentButtons[3];
      let remaining = Math.floor(lastReviws.length / 7);
      let newButtons = [];
      for (let i = 1; i <= remaining; i++) {
        newButtons.push(value + i);
      }
      this.setState({
        currentButtons: newButtons,
        currentButton: 1
      });
    } else if (this.state.currentButton === 5) {
      let value = this.state.currentButtons[3];
      var newButtons = [
        value + 1,
        value + 2,
        value + 3,
        value + 4
      ];
      this.setState({
        currentButtons: newButtons,
        currentButton: 1
      });
    }
  }

  changeBackword() {
    this.setState({
      currentButton: this.state.currentButton -= 1
    });
    if (this.state.currentButton === 0) {
      let value = this.state.currentButtons[0];
      let newButtons = [
        value - 4,
        value - 3,
        value - 2,
        value - 1
      ];
      this.setState({
        currentButtons: newButtons,
        currentButton: 4
      });
    }
  }

  render() {
    return (
      <div className="reviewNavDiv">
        {!(this.state.currentButtons[this.state.currentButton - 1] === 1) && <button 
          className='forward backward'
          onClick={() => { this.changeBackword(); this.props.currentBackword(); }}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>}
        {this.state.currentButtons.map((num, i) => {
          if (this.state.currentButton === (i + 1)) {
            return <div key={i} className='currentButton'>{num}</div>;
          }
          return (
            <div key={i} className='reviewsButtons'>{num}</div>
          );
        })}
       
        {!((this.props.reviews.length - this.props.currentPlace) < 7) && <button 
          className='forward' 
          onClick={() => { this.changeForward(); this.props.currentForward(); }}><ion-icon name="chevron-forward-outline"></ion-icon></button>}
      </div>
    );
  }
}

export default ReviewsNav;