import React from 'react'

export default function Navbar(props) {
    return (
        <nav className= "nav-bar"> 
            <p className= "nav__welcome-text">Welcome! </p>
            <p className= "nav__welcome-text">The Nav Bar</p>
            <button className="recipes-button" onClick={props.onClick} value="recipes">All Recipes</button>
            <button className="new-recipe-button" onClick={props.newRecipe}>New Recipe</button>
        </nav>
    )
}
