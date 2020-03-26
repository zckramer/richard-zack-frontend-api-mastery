import React, { Component } from 'react'

const BASE_URL = "http://localhost:8080"

export default function SingleRecipePage(props) {

    const [fetchData, setFetchData] = React.useState({});
    
    React.useEffect(() => {
        fetch(BASE_URL + '/' + props._id)
            .then(res => res.json())
            .then(recipeData => {
                console.log(recipeData.Recipe)
                setFetchData(recipeData.Recipe)
            })
        
    }, [props._id])
  
    return (
        <div className="Single-Recipe-Page">
            <article className="Single-Recipe-Card">
                <div>Name: {fetchData.name ? fetchData.name : "loading..."}</div>
                <img alt="just a placekitten..." src={fetchData.image ? fetchData.image : "loading..."}></img>
                <p>{fetchData.description ? fetchData.description : "loading..."}</p>
                <ul>
                    
                    {fetchData.ingredients ? fetchData.ingredients.map((ingredient, index) => {
                        return <li key={index}>{ingredient}</li>
                    }) : "loading..."}
                
                </ul>

            </article>
        </div>
    )
}
