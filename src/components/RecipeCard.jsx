import React from 'react'

export default function RecipeCard(recipe) {
    // console.log(recipe)
      
    return (
      <article className="recipe-card" key={recipe.recipeId} id={recipe.recipeId} onClick={recipe.onClick}>
        <h2 className="recipe-name">{recipe.name}</h2>
        <img alt="Cocktail" className="recipe-image" src={recipe.image}  />
      </article>       
    )
}
