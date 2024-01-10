import {connect} from "react-redux";
import React from "react";
import {useParams} from "react-router-dom";

import RecipeDetails from "../components/Recipes/Details";

const RecipeDetailsContainer = (props) => {

    const {field} = useParams();

    return <RecipeDetails field={field} {...props} />
}

const mapState = (state) => {
    return{
        recipes: state.recipesList,
        ingredients: state.productsList
    }
}

export default connect(mapState, null)(RecipeDetailsContainer);