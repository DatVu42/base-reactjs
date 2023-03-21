import React from "react";

class DisplayInfo extends React.Component {

    render() {
        const { listUsers } = this.props;
        // console.log(this.props?.listUsers)
        return (
            <div>
                {listUsers.map((user) => {
                    const {id, name, age} = user;
                    return (
                        <div key={id}>
                            {name}
                            {age}
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfo;