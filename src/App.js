import React from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import RecipesPage from './components/RecipesPage'
import SingleRecipePage from './components/SingleRecipePage'


function App() {
  const [content, setContent] = React.useState(null)
  
  React.useEffect(() => {
    setContent(<Home />)
  }, [])

  function handleRecipesButton() {
    setContent(<RecipesPage />)
  }

  function handleCardClick (event) {
    setContent(<SingleRecipePage data={event}/>)
  }
  
  return (
    <div>
      <Navbar onClick={handleRecipesButton} />
      <div>
        {content}
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