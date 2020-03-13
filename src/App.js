import React, {useState} from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import RecipesPage from './components/RecipesPage'
import SingleRecipePage from './components/SingleRecipePage'


function App() {
  const [content, setContent] = React.useState(null)
<<<<<<< HEAD
=======
  
>>>>>>> 9d824db3dd8abad70695d48597d3bd16cbf0428e
  
  React.useEffect(() => {
    setContent(<Home />)
  }, [])

  function handleRecipesButton() {
<<<<<<< HEAD
    setContent(<RecipesPage />)
  }

  function handleCardClick (event) {
    setContent(<SingleRecipePage data={event}/>)
=======
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
  
return (
  <div>
    <h1>Welcome to Cocktails</h1>
    <p>This is where you would log in...</p>
  </div>
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
  const [isLoading, setIsLoading] = useState(false)
  
  function clearForm() {
    document.querySelector(".input__recipe-name").value = ""
    document.querySelector(".input__recipe-name").placeholder = "drop in your own recipe!"
    document.querySelector(".input__recipe-image").value = ""
    document.querySelector(".input__recipe-image").placeholder = "Cocktail Image URL"
  }

  function getRecipes(){
    setIsLoading(true)
    fetch(BASE_URL)
    .then(res => res.json())
    .then(recipes => {
      setFetchResponse(recipes)
      setIsLoading(false)
    })
>>>>>>> 9d824db3dd8abad70695d48597d3bd16cbf0428e
  }
  
  return (
<<<<<<< HEAD
    <div>
      <Navbar onClick={handleRecipesButton} />
      <div>
        {content}
=======
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
          {isLoading ? (<div>Fetching Data...</div>
           ) : (
          fetchResponse.Recipes && fetchResponse.Recipes.map(recipe => 
          <RecipeCard 
            name={recipe.name}    
            image={recipe.image} 
            recipeId={recipe._id}
          />
            )) }
        
      </section>
>>>>>>> 9d824db3dd8abad70695d48597d3bd16cbf0428e
      </div>
    </div>
  );
}

// function SingleRecipePage(recipe) {
//   return (
//     <article className="single-recipe">
//       <h2 className="single-recipe__title">{recipe.name}</h2>
//       <img alt="Cocktail" className="single-recipe__image" src={recipe.image} />

//     </article>
//   )
// }


export default App;