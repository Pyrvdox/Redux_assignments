// export default connect(mapState, mapDispatch)(Counter)
import CounterComponent from "../components/Counter";
import {increment, stop, link} from "../redux/actions";
import {connect} from "react-redux";
import React from "react";
import {useParams} from "react-router-dom";

const Counter = (props) => {

    const {field} = useParams();


    return <CounterComponent field={field} {...props} />

}
const myInterval = (dispatch) => {

    return setInterval(() => {
        dispatch(increment())
    },1000)
}

const mapStateToProps = (state) => {
    return {
        isCounting: state.counter.isCounting,
        counterValue: state.counter.value

    }
}
const mapDispatchToProps = (dispatch) => {

    let counterInterval = null

    return {
        startCounter: () => {
            dispatch(increment())
            counterInterval = myInterval(dispatch)
        },
        stopCounter: () => {
            dispatch(stop())
            clearInterval(counterInterval)
        },
        setStartingValue: (value) => dispatch(link(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);