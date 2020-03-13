import React from 'react'

export default function RecipeCard(recipe) {
    // console.log(recipe)
      
    return (
      <article className="recipe-card">
      <h2 className="recipe-name">{recipe.name}</h2>
      <img alt="Cocktail" className="recipe-image" src={recipe.image}  />
      </article>       
    )
}

