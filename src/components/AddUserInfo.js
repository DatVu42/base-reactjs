import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//     state = {
//         name: '',
//         age: '',
//         address: 'CT03 Phong Bac',
//     }

//     handleChangeName = (event) => {
//         this.setState({
//             name: event.target.value,
//         })
//     }   

//     handleChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         // console.log(this.state)
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100) + 1 + "-random",
//             name: this.state.name,
//             age: this.state.age
//         })
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm {this.state.age}
//                 <form onSubmit={(event) => this.handleSubmit(event)}>
//                     <span>Name </span>
//                     <input value={this.state.name} onChange={(event) => this.handleChangeName(event)} type="text" /> <br />
//                     <span>Age </span>
//                     <input value={this.state.age} onChange={(event) => {this.handleChangeAge(event)}} type="text" /> <br />
//                     <button type='submit'>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfo = (props) => {
    const [name, setName] = useState('BOM');
    const [age, setAge] = useState(38)

    const handleSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1 + "-random",
            name: name,
            age: age
        })
    }

    return (
        <div>
            My name is {name} and I'm {age}
            <form onSubmit={(event) => handleSubmit(event)}>
                <span>Name </span>
                <input value={name} onChange={(event) => setName(event.target.value)} type="text" /> <br />
                <span>Age </span>
                <input value={age} onChange={(event) => setAge(event.target.value)} type="text" /> <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default AddUserInfo;