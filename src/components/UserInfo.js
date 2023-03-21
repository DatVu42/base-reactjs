import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'BOM',
        age: 38,
        address: 'CT03 Phong Bac',
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
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Name </label>
                    <input value={this.state.name} onChange={(event) => this.handleInputChange(event)} type="text" /> <br />
                    {/* <label>Age </label>
                    <input value={this.state.age} type="text" /> */}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;