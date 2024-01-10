import {connect} from "react-redux";
import React from "react";
import AddRecipe from "../components/Recipes/Add";
import {recipesList} from "../redux/reducers/recipes";
import {addRecipe} from "../redux/actions/recipes"



const mapDispatchToProps = (dispatch) => {
    return {
        addSingleRecipe: (obj) => dispatch(addRecipe(obj))
    }
}


export default connect(null, mapDispatchToProps)(AddRecipe);