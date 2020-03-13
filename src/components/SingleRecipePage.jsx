import React from 'react'

const BASE_URL = "http://localhost:8080"

export default function SingleRecipePage(props) {

    const [fetchData, setFetchData] = React.useState({});

function getSingleRecipe() {
        fetch(BASE_URL + '/' + props._id)
            .then(res => res.json())
            .then(recipeData => {
                console.log(recipeData.Recipe)
                setFetchData(recipeData.Recipe)
            })
    }
    
    React.useEffect(() => {
        getSingleRecipe();
    }, [])

    return (
        <div className="Single-Recipe-Page">
            <article className="Single-Recipe-Card">
                <div>Name: {fetchData.name}</div>
                <img src={fetchData.image}></img>
            </article>
        </div>
    )
}
