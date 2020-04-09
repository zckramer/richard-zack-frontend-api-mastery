import React from 'react'

export default function Navbar(props) {
    return (
        <nav className= "nav-bar"> 
            <span>The Nav Bar</span>
            <section className="nav-bar__link-wrapper">
            <div className="home-button link" onClick={props.homeButton} value="recipes">Home<span></span></div>
            <div className="recipes-button link" onClick={props.onClick} value="recipes">Drinks<span></span></div>
            <div className="new-recipe-button link" onClick={props.newRecipe}>Create<span></span></div>
            </section>
        </nav>
    )
}
