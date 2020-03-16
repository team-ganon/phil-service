import React, { Component } from 'react';

class ReviewsNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: 0,
      currentButtons: []
    }
  }

  componentDidMount() {
    let numberOfButtons = Math.floor((this.props.reviews.length - 1) / 7)
    this.setState({
      buttons: numberOfButtons,
      currentButtons: [1, 2, 3, '...', numberOfButtons]
    })
  }


  render() {
    return (
      <div className="reviewNavDiv">
        {this.state.currentButtons.length > 0 && <button>Back</button>}

        {!this.state.currentButtons.includes(this.state.buttons) && <button onClick={this.props.currentForward}>Forwards</button>}
      </div>
    )
  }
}

export default ReviewsNav;