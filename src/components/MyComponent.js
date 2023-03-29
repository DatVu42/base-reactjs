import React, { useState } from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

// export default class MyComponent extends Component {
//   state = {
//     listUsers: [
//       { id: 1, name: 'Anh', age: 30 },
//       { id: 2, name: 'Toan', age: 35 },
//       { id: 3, name: 'Chai', age: 40 }
//     ]
//   }

//   handleAddNewUser = (event) => {
//     // console.log(event);
//     this.setState({
//       listUsers: [event, ...this.state.listUsers]
//     })
//   }

//   handleDeleteUser = (userId) => {
//     // console.log(id);
//     let listUserClone = [...this.state.listUsers];
//     listUserClone = listUserClone.filter(user => user.id !== userId)
//     this.setState({
//       listUsers: listUserClone
//     })
//   }

//   render() {
//     return (
//       <div>
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <DisplayInfo handleDeleteUser={this.handleDeleteUser}  listUsers={this.state.listUsers} />
//       </div>
//     )
//   }
// }

const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: 'Anh', age: 30 },
    { id: 2, name: 'Toan', age: 35 },
    { id: 3, name: 'Chai', age: 40 }
  ])

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  }

  const handleDeleteUser = (userId) => {
    let listUserClone = [...listUsers];
    listUserClone = listUserClone.filter(user => user.id !== userId);
    setListUsers(listUserClone);
  }

  return (
    <div>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br />
      <DisplayInfo handleDeleteUser={handleDeleteUser} listUsers={listUsers} />
    </div>
  )
}

export default MyComponent;