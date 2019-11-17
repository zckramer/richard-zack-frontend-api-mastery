import React from 'react';
import './App.css';

const BASE_URL = "http://localhost:8080/recipes"

function App () {
  const [state, setState] = React.useState({})
  // Return NavBar
  React.useEffect(() => {
    setState(<><NavBar /><Content /></>)
  }, [])

  return <><NavBar /><Content /></>;
}

function Content () {
  const [state, setState] = React.useState(<AllRecipes />)

  // React.useEffect(() =>{
  //   setState(<AllRecipes />)
  // }, [])
  
  return state;
}

function NavBar () {
  const [state, setState] = React.useState({})

  return (
    <nav className= "nav-bar"> 
      <p className= "nav__welcome-text">Welcome! </p>
      <p className= "nav__welcome-text">the Nav-Bar ;P</p>
      <HomeButton />
    </nav>
    
    
  )
}

function goHome() {
//  setState(<><NavBar /><AllRecipes /></>)
}

function HomeButton () {
  return (
    <button className="home-button" onClick={goHome}>All Recipes</button>
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
  
  function handleClick(event) {
    
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
      <section className="input__recipe">
        <form>
          <input className="input__recipe-name" name="name" placeholder="drop in your own recipe!"></input>
          <input className="input__recipe-image" name="image" placeholder="Cocktail Image URL"></input>
          <button type="submit" onClick={handleClick}>Create Cocktail</button>
        </form>
      </section> 
      <section className="recipe-card__section">
          {fetchResponse.Recipes && fetchResponse.Recipes.map(recipe =>
        <article className="recipe-card">
            <h2 className="recipe-name">{recipe.name}</h2>
            <img alt="Cocktail" className="recipe-image" src={recipe.image}  />
        </article>       
            )}
        
      </section>
      </div>
    </div>
  )
}

export default App;