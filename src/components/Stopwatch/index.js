import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0}

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  timer = () =>
    this.setState(preState => ({
      timeElapsedInSeconds: preState.timeElapsedInSeconds + 1,
    }))

  onClickToStart = () => {
    this.timerId = setInterval(this.timer, 1000)
  }

  onClickToStop = () => {
    clearInterval(this.timerId)
  }

  onClickToReset = () => {
    clearInterval(this.timerId)
    this.setState({timeElapsedInSeconds: 0})
  }

  render() {
    const seconds = this.renderSeconds()
    const minutes = this.renderMinutes()

    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="card">
          <div className="timmer-container">
            <img
              className="clock-image"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timmer-text">Timmer</p>
          </div>
          <div className="time-container">
            <h1 className="span-text">{`${minutes}:${seconds}`}</h1>
          </div>
          <div className="button-container">
            <button
              onClick={this.onClickToStart}
              className="start-btn"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.onClickToStop}
              className="stop-btn"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onClickToReset}
              className="reset-btn"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
