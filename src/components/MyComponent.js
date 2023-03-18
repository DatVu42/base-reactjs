import React, { Component } from 'react'

export default class MyComponent extends Component {
  render() {
    return (
      <div>MyComponent {Math.floor(Math.random() * 100) + 1}</div>
    )
  }
}
