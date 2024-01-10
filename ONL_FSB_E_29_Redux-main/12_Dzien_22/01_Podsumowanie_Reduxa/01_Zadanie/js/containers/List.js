// export default connect(mapState, mapDispatch)(List);
import React from "react";
import ListComponent from "../components/List";
import {save, remove} from "../redux/actions";
import {connect} from "react-redux";

const List = (props) => {
    return <ListComponent {...props} />
}

const mapStateToProps = (state) => {
    return {
        savedNumbers: state.list,
        currentNumber: state.counter.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveCurrentNumber: (value) => dispatch(save(value)),
        removeNumber: (value) => dispatch(remove((value)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)