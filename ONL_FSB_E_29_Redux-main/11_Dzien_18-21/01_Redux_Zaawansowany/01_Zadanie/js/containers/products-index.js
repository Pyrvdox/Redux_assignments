import {connect} from "react-redux";
import React from "react";
import AllProducts from "../components/Products";
import LastProducts from "../components/Home/LastProducts";
import SingleProduct from "../components/Recipes/SingleProduct";
import ProductDetails from "../components/Recipes/Details";
import RecipeDetails from "../components/Recipes/Details";

const mapStateToProps = (state) => {

    return {
        products: state.productsList
    }
}

const ToAllProducts = connect(mapStateToProps, null)(AllProducts);
const ToLastProducts = connect(mapStateToProps, null)(LastProducts);
const ToSelectProducts = connect(mapStateToProps, null)(SingleProduct);

export {ToAllProducts, ToLastProducts, ToSelectProducts}
