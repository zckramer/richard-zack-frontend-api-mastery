import React from "react";
import "./NewRecipeForm.css";

const BASE_URL = "http://localhost:8080/recipes/";

export default function EditRecipeForm(props) {
  const NewIngredientInputElement = (
    <input
      required
      className="input__recipe-ingredient"
      name="ingredient"
      placeholder="Ingredient Name"
    ></input>
  );

  // {fetchData.ingredients ? fetchData.ingredients.map(ingredient=>{
  //   console.log(ingredient)
  //     return <><input className="input__recipe-ingredient" name="ingredient" defaultValue={ingredient ? ingredient : ""} placeholder="Ingredient Name"></input></>
  // }) : "loading..."
  // }

  const [fetchData, setFetchData] = React.useState({});

  React.useEffect(() => {
    fetch(BASE_URL + props._id)
      .then((res) => res.json())
      .then((recipeData) => {
        console.log(recipeData.Recipe);
        setFetchData(recipeData.Recipe);
      });
  }, [props._id]);

  // const [recipeData, setRecipeData] = React.useState(null)
  const [ingredientFields, setIngredientFields] = React.useState([]);
  
  React.useEffect(() => {
    if (fetchData.ingredients) {
      fetchData.ingredients.map(ingredient => {
        
        setIngredientFields(oldIngredientsFields => [...oldIngredientsFields, 
                            <>
                              <input 
                                className="input__recipe-ingredient" 
                                name="ingredient" 
                                key={ingredient._id}
                                defaultValue={ingredient ? ingredient : "loading..."} 
                                placeholder="Ingredient Name">   
                              </input>
                            </>])
      });
    }
  },[fetchData.ingredients]);

  function handleAddIngredientField(event) {
    event.preventDefault();
    console.log("button clicked");
    const oldIngredientsFields = ingredientFields;
    setIngredientFields([...oldIngredientsFields, NewIngredientInputElement]);
  }

  function handleSubmitValidationStyle() {
    const formContent = document.querySelector(".modal-content");
    formContent.classList.add("submitted");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = document.querySelector(".input__recipe-name").value;
    const image = document.querySelector(".input__recipe-image").value;
    const description = document.querySelector(".input__recipe-description")
      .value;
    const instructions = document.querySelector(".input__recipe-instructions")
      .value;
    const ingredientsArray = document.querySelectorAll(
      ".input__recipe-ingredient"
    );
    const ingredients = [];
    ingredientsArray.forEach((ingredient) => {
      // console.log(ingredient.value)
      if (ingredient.value) {
        ingredients.push(ingredient.value);
      }
    });

    if (name && image && description && instructions && ingredientsArray) {
      fetch(BASE_URL + props._id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          image: image,
          description: description,
          ingredients: ingredients,
          instructions: instructions,
        }),
      }).then((res) => {
        if (res.status === 200) {
          res.json().then((responseData) => {
            props.onSubmit(props._id);
          });
        }
      });
    } else {
      handleSubmitValidationStyle();
    }
  }

  const renderFormWithData = (
    <>
      <h2>Edit Recipe Form</h2>
      <input
        className="input__recipe-name"
        required
        name="name"
        defaultValue={fetchData.name}
        placeholder="Recipe Name"
      ></input>
      <input
        className="input__recipe-image"
        required
        name="image"
        defaultValue={fetchData.image}
        placeholder="Cocktail Image URL"
      ></input>
      <input
        className="input__recipe-description"
        required
        name="description"
        defaultValue={fetchData.description}
        placeholder="Write a sentence or two about this drink...!"
      ></input>
      <input
        className="input__recipe-instructions"
        required
        name="instructions"
        defaultValue={fetchData.instructions}
        placeholder="Detailed instructions on how to make this drink..."
      ></input>
      <section className="input__recipe-ingredient-container">
        {ingredientFields}
      </section>
      <button
        className="recipe-add-ingredient"
        name="add-ingredient"
        onClick={handleAddIngredientField}
      >
        Add another Ingredient
      </button>
      <button type="submit" id={props._id} onClick={handleSubmit}>
        Update Cocktail
      </button>
      <button type="button" onClick={props.clearModal} className="modal-exit">
        {" "}
        X{" "}
      </button>
    </>
  );

  return (
    <div className="modal-container show">
      <form className="modal-content">
        {fetchData ? renderFormWithData : "Loading"}
      </form>
    </div>
  );
}
