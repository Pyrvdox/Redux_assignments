// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);
//{ products, sum, addProduct, removeProduct }
import Cart from "../components/Cart";
import {connect} from "react-redux";
import {addToList, deleteFromList, filterProducts} from "../redux/actions";
import React from "react";
import {filteredList, sumOfProducts} from "../redux/selectors";
import { useParams } from "react-router";

const ConnectedCart = (props) => {

    const {field} = useParams()

    console.log("Propsy z connected carts: ", props)
    return <Cart field={field} {...props}/>
}

const mapStateToProps = (state) => {
    console.log(state.routes)
    console.log(state)
    return {
        products: state.routes > 0 ? filteredList(state) : state.products,
        sum: sumOfProducts(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (obj) => dispatch(addToList({name:obj.name, price:obj.price})),
        removeProduct: (obj) => dispatch(deleteFromList(obj)),
        changeFilter: (value) => {
            const valueRoute = value !== '' ? value : 0
            dispatch(filterProducts(parseInt(valueRoute)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedCart)



