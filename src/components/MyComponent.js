import React, { Component } from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';

export default class MyComponent extends Component {
  state = {
    listUsers: [
      { id: 1, name: 'Anh', age: 30 },
      { id: 2, name: 'Toan', age: 35 },
      { id: 3, name: 'Chai', age: 40 }
    ]
  }

  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    )
  }
}
