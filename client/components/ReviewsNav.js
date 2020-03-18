import React, { Component } from 'react';
import style from '../CSS/reviewnav.css';

class ReviewsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: 0,
      currentButtons: [],
      currentButton: 1,
      howManyLeft: this.props.reviews.length,
      below28: false
    };
  }

  componentDidMount() {
    if (this.props.reviews.length > 28) {
      this.setState({
        currentButtons: [1, 2, 3, 4]
      });
    } else {
      let numberOfButtons = Math.ceil(this.props.reviews.length / 7);
      let buttonArray = [];
      for (let i = 0; i < numberOfButtons; i++) {
        buttonArray.push(i + 1);
      }
      this.setState({
        currentButtons: buttonArray
      });
    }
  }

  changeForward() {
    this.setState({
      currentButton: this.state.currentButton += 1,
    });
    this.navLogic();
  }

  navLogic() {
    let lastReviews = this.props.reviews.slice(this.props.currentPlace);
    if (lastReviews.length < 28 && this.state.currentButton === 5) {
      let value = this.state.currentButtons[3];
      let remaining = Math.ceil(lastReviews.length / 7);
      let newButtons = [];
      for (let i = 1; i < remaining; i++) {
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
      currentButton: this.state.currentButton -= 1,
      howManyLeft: this.state.howManyLeft + 7
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

  howManyLeft() {
    this.setState({
      howManyLeft: this.state.howManyLeft - 7
    });
  }

  render() {
    return (
      <div className={style.reviewsComponent}>
        {!(this.state.currentButtons[this.state.currentButton - 1] === 1) && 
        <button 
          className={style.backward}
          onClick={() => { this.changeBackword(); this.props.currentBackword(); }}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>}
        <div className={style.reviewNavDiv}>
          {this.state.currentButtons.map((num, i) => {
            if (this.state.currentButton === (i + 1)) {
              return <div key={i} className={style.currentButton}>{num}</div>;
            }
            return (
              <div key={i} className={style.reviewsButtons}>{num}</div>
            );
          })}
        </div>
        {!((this.props.reviews.length - this.props.currentPlace) <= 7) && <button 
          className={style.forward}
          onClick={() => { this.howManyLeft(); this.changeForward(); this.props.currentForward(); }}><ion-icon name="chevron-forward-outline"></ion-icon></button>}
      </div>
    );
  }
}

export default ReviewsNav;