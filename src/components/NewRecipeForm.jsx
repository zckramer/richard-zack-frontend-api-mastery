import React from 'react'


const BASE_URL = "http://localhost:8080/recipes"

export default function NewRecipeForm(props) {
console.log(props)
    function handleAddIngredient(event) {
      event.preventDefault();
    }

    function handleSubmit(event) {

        event.preventDefault();
    
        const name = document.querySelector(".input__recipe-name").value;
        const image = document.querySelector(".input__recipe-image").value;
        const description = document.querySelector(".input__recipe-description").value;
        const instructions = document.querySelector(".input__recipe-instructions").value;
        const ingredients = document.querySelectorAll(".input__recipe-ingredient").value;

        fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            image: image,
            description: description,
            ingredients: [ingredients],
            instructions: instructions
          })
        })
          .then(response => {
            if (response.status === 200) {
              
              props.onSubmit()
            }
    
          })
      }

    return (
        <div className="modal-container show">
            <form className="modal-content">
                <input className="input__recipe-name" name="name" placeholder="drop in your own recipe!"></input>
                <input className="input__recipe-image" name="image" placeholder="Cocktail Image URL"></input>
                <input className="input__recipe-description" name="description" placeholder="Write a sentence or two about this drink...!"></input>
                <input className="input__recipe-instructions" name="instructions" placeholder="Detailed instructions on how to make this drink..."></input>
                <input className="input__recipe-ingredient" name="ingredient" placeholder="Ingredient Name"></input>
                <button className="recipe-add-ingredient" name="add-ingredient" onClick={handleAddIngredient}>Add another Ingredient</button>
                <button type="submit" onClick={handleSubmit}>Submit Cocktail</button>
                <button type="button" onClick={props.clearModal}>Exit</button>
                
            </form>
        </div>
    )
}
