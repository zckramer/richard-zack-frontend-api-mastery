import React from 'react'
import './RecipeCard.css'
import icon from './trash.png'
import DeleteRecipe from './DeleteRecipe'

export default function RecipeCard(recipe) {
    // console.log(recipe)
      
    return (
      // {recipe.delete === true ? <DeleteRecipe /> : }
        
        <div id={recipe.recipeId} name={recipe.name} className="recipe-card" key={recipe.recipeId}  onClick={recipe.onClick}>
          <img id={recipe.recipeId} name={recipe.name} alt="delete" className="recipe-delete" src={icon} onClick={recipe.onDelete}></img>
          <h2 id={recipe.recipeId} className="recipe-name">{recipe.name}</h2>
          <img id={recipe.recipeId} alt="Cocktail" className="recipe-image" src={recipe.image} />
        </div>       
      

    )
}
