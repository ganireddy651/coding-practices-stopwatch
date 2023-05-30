import {Component} from 'react'
import './index.css'
import {format} from 'date-fns'

class Stopwatch extends Component {
  state = {sec: 0, min: 0}

  onClickToStart = () => {
    const {sec} = this.state
    if (sec < 60) {
      this.timerId = setInterval(this.timer, 1000)
    } else {
      this.setState(preState => ({
        min: preState.min + 1,
        sec: 0,
      }))
    }
  }

  timer = () => this.setState(preState => ({sec: preState.sec + 1}))

  onClickToStop = () => {
    clearInterval(this.timerId)
  }

  onClickToReset = () => {
    clearInterval(this.timerId)
    this.setState({sec: 0, min: 0})
  }

  render() {
    const {min, sec} = this.state
    const time = format(new Date(0, 0, 0, 0, min, sec), 'mm:ss')

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
            <h1 className="span-text">{time}</h1>
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
