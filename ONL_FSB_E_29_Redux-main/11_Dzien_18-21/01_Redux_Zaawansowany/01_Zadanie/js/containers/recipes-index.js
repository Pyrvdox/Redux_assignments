import {connect} from "react-redux";
import AddRecipe from "../components/Recipes/Add";
import AllRecipes from "../components/Recipes";
import LastRecipes from "../components/Home/LastRecipes";
const mapStateToProps = (state) => {
    return {
        recipes: state.recipesList
    }
}

const ToListRecipes = connect(mapStateToProps, null)(AllRecipes);
const ToLastRecipes = connect(mapStateToProps, null)(LastRecipes);

export {ToListRecipes, ToLastRecipes}