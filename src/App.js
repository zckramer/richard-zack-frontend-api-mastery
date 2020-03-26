import React, {useState} from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import RecipesPage from './components/RecipesPage'
import SingleRecipePage from './components/SingleRecipePage'
import NewRecipeForm from './components/NewRecipeForm'


function App() {
  const [content, setContent] = React.useState(null)
  const [modal, setModal] = React.useState("")
  
  React.useEffect(() => {
    setContent(<Home />)
  }, [])

  function handleRecipesButton(event) {
    event.preventDefault();
    clearModal()
    setContent(<RecipesPage onClick={handleCardClick}/>)
  }

  function handleCardClick (event) {
    console.log(event.target.id)
    setContent(<SingleRecipePage _id={event.target.id}/>)
  }

  function handleNewRecipeModal() {
    setModal(<NewRecipeForm show="true" onSubmit={handleRecipesButton} clearModal={clearModal}/>)
  }

  function clearModal() {
    setModal("")
  }
  
  return (
    <>
    {modal}
      <Navbar onClick={handleRecipesButton} newRecipe={handleNewRecipeModal} clearModal={clearModal} />
      <div>
        {content}
      </div> 
    </>
  );
}
export default App;