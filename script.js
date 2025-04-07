function displayRecipe(response){
  let recipeElement=document.querySelector("#recipe");
recipeElement.innerHTML= response.data.answer;  

}





function generateRecipe(event){
event.preventDefault();

let instruction=document.querySelector("#ready-meal");
let apiKey= "f333f4tb5038acab6309b2fo8d0b9912";
let prompt=` User instructions: Generate a recipe with the ${instruction.value}`;
let context="you are a chef and you love to make meals with different ingredients. please create short/medium easy to follow recipes and please list the ingredients needed in bullet point form, make sure to follow the users instructions below in basic HTML and put the recipe name in a <strong> element";
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipes= document.querySelector("#generate");
recipes.innerHTML=`⏳Generating a recipe for you with ${instruction.value}!`;

axios.get(apiUrl).then(displayRecipe);

}



let form=document.querySelector("#generator-form");
form.addEventListener("submit", generateRecipe);