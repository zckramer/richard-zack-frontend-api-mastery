import React from 'react';
import './App.css';
// import { stringify } from 'querystring';
// import Http from './utils/http.js'

class Recipe extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    fetch("http://localhost:8080/recipes")
    .then(res => res.json())
    .then(recipes => {
      console.log(recipes);
      this.setState( {recipes} )
    })
  }

  render() {
    return (
      {this.state.recipes.map(recipe => (
        <h1>{recipe.name}</h1>
      ))}
        
        
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
  
      </header>
      <main className="main-body">
        <Recipe />
      </main>
    </div>
  );
}

export default App;

