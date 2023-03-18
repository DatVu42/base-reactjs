import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MyComponent from './components/MyComponent';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';

class App extends React.Component {
  state = {
    name: 'BOM',
    address: 'CT03 Phong Bac',
    age: 38
  }

  handleOnClick() {
    this.setState({
      name: 'Dat Vu',
      age: Math.floor(Math.random() * 100) + 1
    })
    // console.log(this.state)
  }

  handleInputChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <MyComponent />
        My name is {this.state.name}, age {this.state.age}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input onChange={(event) => this.handleInputChange(event)} type="text" />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
