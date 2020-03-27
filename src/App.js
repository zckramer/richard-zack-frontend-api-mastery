import React, {useState} from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import RecipesPage from './components/RecipesPage'
import SingleRecipePage from './components/SingleRecipePage'
import NewRecipeForm from './components/NewRecipeForm'
import DeleteRecipe from './components/DeleteRecipe'

function App() {
  const [content, setContent] = React.useState(null)
  const [modal, setModal] = React.useState("")
  
  React.useEffect(() => {
    setContent(<Home />)
  }, [])

  function handleRecipesButton() {
    clearModal()
    setContent(<RecipesPage onClick={handleCardClick} onDelete={onDeleteRecipe}/>)
  }

  function handleCardClick (event) {
    setContent(<SingleRecipePage _id={event.target.id}/>)
  }

  function handleNewRecipeModal() {
    setModal(<NewRecipeForm show="true" onSubmit={handleRecipesButton} clearModal={clearModal}/>)
  }

  function onDeleteRecipe(event) {
    setModal(<DeleteRecipe id={event.target.id} baseURL="http://localhost:8080/recipes/" clearModal={clearModal} name={event.target.name} onSubmit={handleRecipesButton} />)
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