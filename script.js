function generateRecipe(event){
event.preventDefault();

let recipeElement=document.querySelector("#recipe");
recipeElement.innerHTML="chicken curry";

}



let form=document.querySelector("#generator-form");
form.addEventListener("submit", generateRecipe);