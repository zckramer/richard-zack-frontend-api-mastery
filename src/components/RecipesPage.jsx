import React from 'react'
import RecipeCard from './RecipeCard'
import NewRecipeForm from './NewRecipeForm'

const BASE_URL = "http://localhost:8080/recipes"

export default function RecipesPage(props) {
  const [fetchResponse, setFetchResponse] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false)

  

  function getRecipes() {
    setIsLoading(true)
    fetch(BASE_URL)
      .then(res => res.json())
      .then(recipes => {
        setFetchResponse(recipes)
        setIsLoading(false)
      })
  }
  React.useEffect(() => {
    getRecipes();
  }, [])


  return (
    <div className="App">
      <div className="recipes-container">
        <section className="recipe-card__section">
          {isLoading ? (<div>Loading Data...</div>) : (fetchResponse.Recipes && fetchResponse.Recipes.map(recipe =>
            <RecipeCard 
              key={recipe._id}
              name={recipe.name}
              image={recipe.image}
              recipeId={recipe._id}
              description={recipe.description}
              onClick={props.onClick}
            />
          ))}

        </section>
      </div>
    </div>
  )
}