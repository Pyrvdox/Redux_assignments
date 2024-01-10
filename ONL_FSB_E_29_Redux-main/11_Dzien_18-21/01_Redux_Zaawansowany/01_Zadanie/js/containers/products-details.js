import {connect} from "react-redux";
import React from "react";
import {useParams} from "react-router-dom";

import ProductDetails from "../components/Products/Details";

const ProductsDetailsContainer = (props) => {

    const {field} = useParams();

    return <ProductDetails field={field} {...props} />
}

const mapState = (state) => {
    return{
        products: state.productsList
    }
}

export default connect(mapState, null)(ProductsDetailsContainer);