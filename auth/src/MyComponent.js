import React, { Component } from 'react'
import IdleTimer from 'react-idle-timer'
import App from "./App"

export default class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
  }

  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
		  onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
		  debounce={1000}
          startOnMount={true}
          timeout={5000} />
		{/* your app here */}
        <App {...this.props}/>
      </div>
    )
  }

  _onAction(e) {
    
    console.log('onAction : user did something', e)
  }

  _onActive(e) {
    console.log('onActive : user is active', e)
    console.log('time remaining', this.idleTimer.getRemainingTime())
  }

  _onIdle(e) {
    console.log('onIdle : user is idle', e)
    console.log('Idle timer', this.idleTimer)
    console.log('last active', this.idleTimer.getLastActiveTime())
  }
}