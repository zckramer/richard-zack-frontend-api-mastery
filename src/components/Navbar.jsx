import React from 'react'

export default function Navbar(props) {
    return (
        <nav className= "nav-bar"> 
            <span>The Nav Bar</span>
            <div className="home-button link" onClick={props.homeButton} value="recipes">Home</div>
            <div className="recipes-button link" onClick={props.onClick} value="recipes">All Recipes</div>
            <div className="new-recipe-button link" onClick={props.newRecipe}>New Recipe</div>
        </nav>
    )
}
