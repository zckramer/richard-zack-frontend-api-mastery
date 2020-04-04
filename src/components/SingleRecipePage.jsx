import React, { Component } from 'react'
import './SingleRecipePage.css'

const BASE_URL = "http://localhost:8080/recipes/"

export default function SingleRecipePage(props) {

    const [fetchData, setFetchData] = React.useState({});
    
    React.useEffect(() => {
        fetch(BASE_URL + props._id)
            .then(res => res.json())
            .then(recipeData => {
                // console.log(recipeData.Recipe)
                setFetchData(recipeData.Recipe)
            })
        
    }, [props._id])
  
    return (
        <div className="Single-Recipe-Page">
            <div className="recipe-page__name-and-image">
                <img 
                    className="recipe-page__img" 
                    alt="just a placekitten..." 
                    src={fetchData.image ? fetchData.image : "loading..."}>
                </img>
                <h3 className="recipe-page__name">
                    {fetchData.name ? fetchData.name : "loading..."}
                </h3>
            </div>
            <div className="recipe-page__details">
                <p>{fetchData.description ? fetchData.description : "loading..."}</p>
                
                <ul>                
                    {fetchData.ingredients ? fetchData.ingredients.map((ingredient, index) => {
                        return <li key={index}>{ingredient}</li>
                    }) : "loading..."}
                </ul>

            </div>
            <div className="recipe-page__buttons">
                <button type="button" id={props._id} onClick={props.edit}>Edit</button>
                <button type="button" name={fetchData.name} id={props._id} onClick={props.delete}>Delete</button>
            </div>
        </div>
    )
}
