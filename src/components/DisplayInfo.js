import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUsers: true
    }

    toggleListUsers = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }

    render() {
        const { listUsers } = this.props;
        // console.log(this.props?.listUsers)
        return (
            <div>
                <div>
                    <span onClick={this.toggleListUsers}>
                        {this.state.isShowListUsers ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUsers &&
                    <>
                        {listUsers.map((user) => {
                            const { id, name, age } = user;
                            return (
                                <div key={id} className={age <= 30 ? "red" : "blue"}>
                                    <span>Name: {name}</span> <span style={{margin: '20px'}}>Age: {age}</span>
                                    <button onClick={() => this.props.handleDeleteUser(id)}>Delete</button>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfo;