import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MyComponent from './components/MyComponent';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';

class App extends React.Component {
  state = {
    name: 'BOM',
    address: 'CT03 Phong Bac'
  }

  handleOnClick(event) {
    console.log(event.target)
  }

  handleOnMouseOver(event) {
    console.log(event.screenX, event.screenY)
  }

  render() {
    return (
      <div>
        <MyComponent />
        My name is {this.state.name}, address {this.state.address}
        <button onClick={this.handleOnClick}>Handle click</button>
        <button onMouseOver={this.handleOnMouseOver}>Handle OnMouseOver</button>
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
