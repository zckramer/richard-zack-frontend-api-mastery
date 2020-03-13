import React from 'react'
import RecipeCard from './RecipeCard'

const BASE_URL = "http://localhost:8080/recipes"

export default function RecipesPage(props) {
  const [fetchResponse, setFetchResponse] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false)

  function clearForm() {
    document.querySelector(".input__recipe-name").value = ""
    document.querySelector(".input__recipe-name").placeholder = "drop in your own recipe!"
    document.querySelector(".input__recipe-image").value = ""
    document.querySelector(".input__recipe-image").placeholder = "Cocktail Image URL"
  }

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

  function handleSubmit(event) {

    event.preventDefault();

    const name = document.querySelector(".input__recipe-name").value;
    const image = document.querySelector(".input__recipe-image").value;

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        image: image
      })
    })
      .then(response => {
        if (response.status === 200) {

          clearForm()

          getRecipes();
        }

      })

  }
  return (
    <div className="App">
      <div className="recipes-container">
        <section className="recipe-form">
          <p>New Cocktail:</p>
          <form>
            <input className="input__recipe-name" name="name" placeholder="drop in your own recipe!"></input>
            <input className="input__recipe-image" name="image" placeholder="Cocktail Image URL"></input>
            <button type="submit" onClick={handleSubmit}>Create Cocktail</button>
          </form>
        </section>
        <section className="recipe-card__section">
          {isLoading ? (<div>Loading Data...</div>) : (fetchResponse.Recipes && fetchResponse.Recipes.map(recipe =>
            <RecipeCard 
              key={recipe._id}
              name={recipe.name}
              image={recipe.image}
              recipeId={recipe._id}
              onClick={props.onClick}
            />
          ))}

        </section>
      </div>
    </div>
  )
}