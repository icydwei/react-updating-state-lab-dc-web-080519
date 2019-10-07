// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let increment = this.state.timesClicked + 1
    console.log(increment)
    this.setState({
      timesClicked: increment
    })
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }


}
