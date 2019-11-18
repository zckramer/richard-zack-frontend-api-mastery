import React from 'react';
import './App.css';

const BASE_URL = "http://localhost:8080/recipes"

function App () {
  const [content, setContent] = React.useState(null)
  document.querySelectorAll(".recipe-card").forEach(recipe => {
  recipe.innerHTML = "LALA"
  recipe.addEventListener("click", function() {
    console.log("CLICK")
  })
})
  
  React.useEffect(() => {
   
    setContent(<Home />)
  }, [])

  function handleEvent(prop) {
    
  }
  function handleRecipesButton() {
    setContent(<AllRecipes />)
    }

  return (
   <div>
    <nav className= "nav-bar"> 
      <p className= "nav__welcome-text">Welcome! </p>
      <p className= "nav__welcome-text">the Nav-Bar ;P</p>
      <button className="recipes-button" onClick={handleRecipesButton} value="recipes">All Recipes</button>
    </nav>
     <div>
       {content}
    </div>
   </div>
  );
}

function Home () {
  const [state, setState] = React.useState(null)
  
  
return (

      <h1>Welcome to Cocktails</h1>
    
  );
}








function RecipeCard (recipe) {
  // console.log(recipe)
    
  return (
    <article className="recipe-card">
    <h2 className="recipe-name">{recipe.name}</h2>
    <img alt="Cocktail" className="recipe-image" src={recipe.image}  />
    </article>       
  )
}

function SingleRecipePage (recipe) {
  return(
    <article className="single-recipe">
      <h2 className="single-recipe__title">{recipe.name}</h2>
      <img alt="Cocktail" className="single-recipe__image" src ={recipe.image} />
      
    </article>
  )
}

function AllRecipes () {
  const [fetchResponse, setFetchResponse] = React.useState({});
  
  function clearForm() {
    document.querySelector(".input__recipe-name").value = ""
    document.querySelector(".input__recipe-name").placeholder = "drop in your own recipe!"
    document.querySelector(".input__recipe-image").value = ""
    document.querySelector(".input__recipe-image").placeholder = "Cocktail Image URL"
  }

  function getRecipes(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(recipes => {
      setFetchResponse(recipes)
    })
  }
  React.useEffect(() => {
    getRecipes();
  }, [])  
  
  function handleSubmit(event) {
    
    event.preventDefault();

    const name = document.querySelector(".input__recipe-name").value;
    const image = document.querySelector(".input__recipe-image").value;

    fetch(BASE_URL,{
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
        if(response.status === 200) {

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
          {fetchResponse.Recipes && fetchResponse.Recipes.map(recipe => 
          <RecipeCard 
          name={recipe.name}    
          image={recipe.image} 
          recipeId={recipe._id}
          />
            )}
        
      </section>
      </div>
    </div>
  )
}

export default App;