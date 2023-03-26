import React from "react";

class DisplayInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowListUsers: true
        }

        console.log("constructor")
    }

    toggleListUsers = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }

    componentDidMount() {
        console.log("componentDidMount")
        
        setTimeout(() => {
            document.title = 'Học ReactJS'
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        // console.log(this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert("You got 5 users!")
            }
        }
    }

    render() {
        const { listUsers } = this.props;
        // console.log(this.props?.listUsers)
        console.log("render")
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