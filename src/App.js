import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

// import { stringify } from 'querystring';
// import Http from './utils/http.js'

const BASE_URL = "http://localhost:8080/recipes"

class Recipes extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(recipes => {
      // console.log(recipes);
      // const recipes = Http.getRequest(BASE_URL)
      this.setState({recipes: recipes})
    })
  }

  render() {
    return (
      <div>
        {this.state.recipes.map(recipe => (
          <h3>{recipe.name}</h3>
        ))}
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Look at AAAAAALLLLL the cocktails!</p>
      </header>
      <main className="main-body">
        <>
        holy balls!
        </>
        {/* <Recipes /> */}
      </main>
    </div>
  );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default App;

