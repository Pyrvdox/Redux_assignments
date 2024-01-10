import React, {useEffect} from "react";

const RecipeDetails = ({recipes, ingredients, field}) => {


    console.log("RecipeDetails Produkty: ", ingredients)
    return (
        <div>
            <h1>Name: {recipes[field -1].name}</h1>
            <h2>ID: {field}</h2>
            <h2>Description: {recipes[field -1].desc}</h2>

            <h2>Składniki:</h2>
            <ul>{recipes[field -1].products.map(item =><li key={item -1}>- {ingredients[item -1].name}</li> )}</ul>

        </div>

    )
}

export default RecipeDetails;