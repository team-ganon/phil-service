import React, { Component } from 'react';

class ReviewsNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: 0,
      currentButtons: [],
      currentButton: 1
    }
  }

  componentDidMount() {
    let numberOfButtons = Math.floor((this.props.reviews.length - 1) / 7)
    this.setState({
      buttons: numberOfButtons,
      currentButtons: [1, 2, 3, '...', numberOfButtons]
    })
  }

  changeForward() {
    this.setState({
      currentButton: this.state.currentButton += 1
    })
    if (this.state.currentButtons[this.state.currentButton] === this.state.buttons - 4) {
      let numberOfButtons = Math.floor((this.props.reviews.length - 1) / 7)
      let value = this.state.currentButtons[2];
      var newButtons = [
        value + 1,
        '...',
        value + 2,
        value + 3,
        numberOfButtons
      ];
      this.setState({
        currentButtons: newButtons
        //what to do with current button
      })
    } else if (this.state.currentButton === 4) {
      let numberOfButtons = Math.floor((this.props.reviews.length - 1) / 7)
      let value = this.state.currentButtons[2];
      var newButtons = [
        value + 1,
        value + 2,
        value + 3,
        '...',
        numberOfButtons
      ];
      this.setState({
        currentButtons: newButtons,
        currentButton: 1
      })
    }
  }


  render() {
    return (
      <div className="reviewNavDiv">
        {!this.state.currentButtons.includes(1) && <button className='forward backward'><ion-icon name="chevron-back-outline"></ion-icon></button>}
        {this.state.currentButtons.map((num, i) => {
          if (this.state.currentButton === (i + 1)) {
           return <div key={i} className='currentButton'>{num}</div>
          }
          return (
            <div key={i} className='reviewsButtons'>{num}</div>
          )
        })}
        {!(this.state.currentButtons[this.state.currentButton] > this.state.buttons - 4) && 
        <button 
        className='forward' 
        onClick={() => {this.changeForward(); this.props.currentForward()}}><ion-icon name="chevron-forward-outline"></ion-icon></button>}
      </div>
    )
  }
}

export default ReviewsNav;