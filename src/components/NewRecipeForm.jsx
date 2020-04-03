import React from 'react'
import './NewRecipeForm.css'

const BASE_URL = "http://localhost:8080/recipes"

export default function NewRecipeForm(props) {
const IngredientInputElement = <input required className="input__recipe-ingredient" name="ingredient" placeholder="Ingredient Name"></input>
const [ingredientFields, setIngredientFields] = React.useState([IngredientInputElement])


  function handleAddIngredientField(event) {
    event.preventDefault();
    const oldIngredientsFields = ingredientFields
    setIngredientFields([...oldIngredientsFields, IngredientInputElement])
  }

  function handleSubmitValidationStyle() {
    const formContent = document.querySelector(".modal-content");
    formContent.classList.add("submitted");
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.querySelector(".input__recipe-name").value;
    const image = document.querySelector(".input__recipe-image").value;
    const description = document.querySelector(".input__recipe-description").value;
    const instructions = document.querySelector(".input__recipe-instructions").value;
    const ingredientsArray = document.querySelectorAll(".input__recipe-ingredient");
    const ingredients = []
    ingredientsArray.forEach(ingredient => {
      // console.log(ingredient.value)
      if(ingredient.value) {
        ingredients.push(ingredient.value) 
        } 
    })

    if(name && image && description && instructions && ingredientsArray) {
      fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          image: image,
          description: description,
          ingredients: ingredients,
          instructions: instructions
        })
      })
        .then(res => {
          if (res.status === 200) {
            res.json()
            .then(responseData => {
              console.log(responseData)
              props.onSubmit(responseData.response._id)
            })
          }
        })
    } else {
      handleSubmitValidationStyle();
    }
  }

  return (
    <div className="modal-container show">
      <form className="modal-content">
        <h2>New Recipe Form</h2>
        <input className="input__recipe-name" required name="name" placeholder="drop in your own recipe!"></input>
        <input className="input__recipe-image" required name="image" placeholder="Cocktail Image URL"></input>
        <input className="input__recipe-description" required name="description" placeholder="Write a sentence or two about this drink...!"></input>
        <input className="input__recipe-instructions" required name="instructions" placeholder="Detailed instructions on how to make this drink..."></input>
        <section className="input__recipe-ingredient-container">
          {ingredientFields.map(field=>{
            return field
          })}
        </section>
        <button className="recipe-add-ingredient" name="add-ingredient" onClick={handleAddIngredientField}>Add another Ingredient</button>
        <button type="submit" onClick={handleSubmit}>Submit Cocktail</button>
        <button type="button" onClick={props.clearModal} className="modal-exit"> X </button>
      </form>
    </div>
  )
}