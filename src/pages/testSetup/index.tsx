import React, { Component } from 'react'
import Setup from './setup'

export default class TestSetup extends Component {
  state: any = {
    secondProgress: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({secondProgress: [
        { current: 'N', reached: 'Y', secProgress: 'arr0', secTips: '1110000011' },
        { current: 'N', reached: 'Y', secProgress: 'arr1', secTips: '11111' },
        { current: 'N', reached: 'Y', secProgress: 'arr2', secTips: '2222' },
        { current: 'Y', reached: 'Y', secProgress: 'arr3', secTips: '3333333' },
        { current: 'N', reached: 'N', secProgress: 'arr4', secTips: '4444444444444' }
      ]})
    }, 2000);
  }
  render() {
    const { secondProgress } = this.state;
    return (
      <div>
        <h1>测试进度条</h1>
        <hr/>
        <div style={{width: '80%', border: '1px solid red', height: '200px'}}>
          <Setup progress={secondProgress} />
        </div>
      </div>
    )
  }
}
