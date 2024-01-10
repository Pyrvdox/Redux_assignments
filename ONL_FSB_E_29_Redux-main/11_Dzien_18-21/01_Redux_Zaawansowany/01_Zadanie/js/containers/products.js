import {connect} from "react-redux";
import React from "react";
import AddProduct from "../components/Products/Add";
import {productsList} from "../redux/reducers/products";
import {addProduct} from "../redux/actions/products";


const ProductContainer = (props) => {
    return <AddProduct {...props} />
}



const mapDispatchToProps = (dispatch) => {
    return {
        addSingleProduct: (obj) => {

            dispatch(addProduct(obj))
        }

    }
}

export default connect(null, mapDispatchToProps)(ProductContainer);