import React from 'react'
import './RecipeCard.css'
import icon from './trash.png'
import DeleteRecipe from './DeleteRecipe'

export default function RecipeCard(recipe) {
    window.addEventListener('mousemove', moveToolTip)
    
    function moveToolTip(event) {
      const toolTipArray = document.querySelectorAll(".recipe-card-tooltip")
      
      toolTipArray.forEach(toolTip=>{
        const clientYOffset = 30
        const clientXOffset = 10
        toolTip.style.top = (event.clientY + clientYOffset) + "px"
        toolTip.style.left = (event.clientX + clientXOffset) + "px"
      })
    }
    return (
      <>
        <div id={recipe.recipeId} name={recipe.name} className="recipe-card" key={recipe.recipeId}  onClick={recipe.onClick}>
        <div className="recipe-card-tooltip">{recipe.description}</div>
          <img id={recipe.recipeId} name={recipe.name} alt="delete" className="recipe-delete" src={icon} onClick={recipe.onDelete}></img>
          <h2 id={recipe.recipeId} className="recipe-name">{recipe.name}</h2>
          <img id={recipe.recipeId} alt="Cocktail" className="recipe-image" src={recipe.image} />
        </div>    
      </>   
      

    )
}
