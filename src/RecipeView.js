import React from "react";

//RecipeView will help display the recipes and delete if necessary
function RecipeView({ recipe, deleteRecipe }) {
    //test to see if recipes are read correctly
    console.log(recipe, deleteRecipe);
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img className="scale-down" src={recipe.photo} alt={recipe.name}/></td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    )
}

export default RecipeView;