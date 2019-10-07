// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
// Clicking this button changes the settings.bitrate state property to 12
  bitClick = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
    }
  }, () => console.log(this.state.settings.bitrate))
  }

  // Clicking this button changes the settings.video.resolution state property to '720p'
  resClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    }, () => console.log(this.state.settings.video.resolution))
  }


  render () {
    return (
      <div>
      <button onClick={this.bitClick} className='bitrate'>Bitrate</button>
      <button onClick={this.resClick} className='resolution'>Resolution</button>
      </div>
    )
  }

}
