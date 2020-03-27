import React from 'react'

export default function DeleteRecipe(props) {
    function handleDeleteRecipe(event) {
      event.preventDefault()  
      fetch(props.baseURL + props.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(response => {
          if (response.status === 200) {
            props.onSubmit()
          }
        })
    }

    let recipeNameStyle = {color: 'blue'}
    return (
    <div className="modal-container show">
      <form className="modal-content">
        <h2>Are you sure you want to delete <span style={recipeNameStyle}>{props.name}</span>?</h2>
        
        <button type="submit" onClick={handleDeleteRecipe}>Delete this recipe</button>
        <button type="button" onClick={props.clearModal}>Cancel</button>

      </form>
    </div>
    )
}
