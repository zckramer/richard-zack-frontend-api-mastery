import React from 'react';
import './App.css';

const BASE_URL = "http://localhost:8080/recipes"

function App () {
const [state, setState] = React.useState(<Recipes />)

function refreshState() {
  setState(<Recipes />)
}

return state;
}
  // const [recipes, setRecipes] = React.useState("");


  
function Recipes () {
  const [fetchResponse, setFetchResponse] = React.useState({});
  function getRecipes(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(recipes => {
      // console.log(recipes);
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
          getRecipes();
        }
        
      })
  }
  return (
    <div className="App">
      <div className="viewport">
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