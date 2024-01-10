// export default connect()(UserInput);
import UserInputComponent from "../components/UserInput";
import React from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/actions";

const UserInput = (props) => {
    return <UserInputComponent {...props}/>
}


const mapDispatchToProps = (dispatch) => {
    return {
        onUserAdd: (value) => dispatch(addUser(value, 0))
    }
}

export default connect(null, mapDispatchToProps)(UserInput)