import React from "react";

// class DisplayInfo extends React.Component {

//     render() {
//         const { listUsers } = this.props;
//         // console.log(this.props?.listUsers)
//         return (
//             <div>
//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             const { id, name, age } = user;
//                             return (
//                                 <div key={id} className={age <= 30 ? "red" : "blue"}>
//                                     <span>Name: {name}</span> <span style={{margin: '20px'}}>Age: {age}</span>
//                                     <button onClick={() => this.props.handleDeleteUser(id)}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;

    return (
        <div>
            {true &&
                <>
                    {listUsers.map((user) => {
                        const { id, name, age } = user;
                        return (
                            <div key={id} className={age <= 30 ? "red" : "blue"}>
                                <span>Name: {name}</span> <span style={{ margin: '20px' }}>Age: {age}</span>
                                <button onClick={() => props.handleDeleteUser(id)}>Delete</button>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfo;