import React from 'react';
import './App.css';

const BASE_URL = "http://localhost:8080/recipes"

function App () {

  // const [recipes, setRecipes] = React.useState("");

  const [fetchResponse, setFetchResponse] = React.useState({});
  
  React.useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(recipes => {
      console.log(recipes);
      setFetchResponse(recipes)
    })
  }, [])

  return (
    <div className="App">
      <output>
      {fetchResponse.Recipes && fetchResponse.Recipes[1].name}
      </output>
    </div>
      
  )
}

export default App;