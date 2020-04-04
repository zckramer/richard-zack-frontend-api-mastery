import React, {useState} from 'react';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import RecipesPage from './components/RecipesPage'
import SingleRecipePage from './components/SingleRecipePage'
import NewRecipeForm from './components/NewRecipeForm'
import DeleteRecipe from './components/DeleteRecipe'
import EditRecipeForm from './components/EditRecipeForm'

function App() {
  const [content, setContent] = React.useState(null)
  const [modal, setModal] = React.useState("")
  
  React.useEffect(() => {
    setContent(<Home />)
  }, [])

  function handleGoHome() {
    setContent(<Home />)
  }

  function handleRecipesButton() {
    clearModal()
    setContent(<RecipesPage onClick={handleSingleRecipePage} onDelete={deleteRecipeModal}/>)
  }

  function handleSingleRecipePage (event) {
    setContent(<SingleRecipePage _id={event.target.id} delete={deleteRecipeModal} edit={editRecipeModal}/>)
  }
  function handleSingleRecipePageFromEdit (id) {
    clearModal()
    setContent(<>"Refreshing"</>)
    console.log(id)
    setContent(<SingleRecipePage _id={id} delete={deleteRecipeModal} edit={editRecipeModal}/>)
  }

  function handleShowNewRecipe(id) {
    clearModal()
    setContent(<SingleRecipePage _id={id} delete={deleteRecipeModal} edit={editRecipeModal}/>)
  }

  function handleNewRecipeModal() {
    setModal(<NewRecipeForm show="true" onSubmit={handleShowNewRecipe} clearModal={clearModal}/>)
  }
  
  function deleteRecipeModal(event) {
    setModal(<DeleteRecipe id={event.target.id} baseURL="http://localhost:8080/recipes/" clearModal={clearModal} name={event.target.name} onSubmit={handleRecipesButton} />)
  }
  function editRecipeModal(event) {
    setModal(<EditRecipeForm _id={event.target.id} clearModal={clearModal} onSubmit={handleSingleRecipePageFromEdit} />)
  }
  
  function clearModal() {
    setModal("")
  }
  
  return (
    <>
    {modal}
    <div className="App">
    <Navbar homeButton={handleGoHome} onClick={handleRecipesButton} newRecipe={handleNewRecipeModal} clearModal={clearModal} />
      
        {content}
    </div>
    </>
  );
}
export default App;