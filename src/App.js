import React from 'react';
import './App.css';
// import { stringify } from 'querystring';
import Http from './utils/http.js'
import { stringify } from 'querystring';

const poop = "Poop Experiment"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {poop}
      </header>
      <main className="main-body">
        <RecipesList />
      </main>
    </div>
  );
}

function RecipesList() {
  let theDataResponse = Http.getRequest("http://localhost:8080/recipes")
  
  const theData = theDataResponse 
    
    return <div>{theData}</div>
  
  
  // console.log(recipe._id)
  //   return <div></div>
}



  // const recipeNames = 
  // {
  //   drink1: "whiskey in a glass",
  //   drink2: "pint glass full of whiskey"
  // }
  
  
  // fetch(
  //   "http://localhost:8080/recipes"
  // ).then( res => res.json())
  // .then(recipes => {
  //   for (const recipe of recipes) {
  //     console.log(recipe.name)
  //   }
  // })


  /*
  
  
  const recipesOptions = recipesResponse.name.map(recipe => {
  return (
    <div className="selection-body">
    {recipe}
    </div>
  )
  })
} 
*/
export default App;


// async function CohortsDropDown() {
//   const cohortsResponse = await Http.getRequest(
//     "http://localhost:8080/recipes"
//   );

//   const cohortOptionElements = cohortsResponse.cohorts.map(cohort => {
//     return Deact.create("option", { value: cohort._id }, cohort.title);
//   });

//   return Deact.create("select", { class: "cohort-id" }, cohortOptionElements);
// }
