import React, {useState} from 'react';
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
    setContent(<RecipesPage onClick={handleCardClick}/>)
  }

  function handleCardClick (event) {
    console.log(event.target.id)
    setContent(<SingleRecipePage _id={event.target.id}/>)
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
export default App;