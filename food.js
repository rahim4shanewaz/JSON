const mealList = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(json =>  displayMeal(json.meals))
}


const displayMeal = meals => {
    console.log(meals)
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        const foodBox = document.createElement('div');
        foodBox.innerHTML =`
                    <div class="card shadow">
                        <img src=${meal.strMealThumb} class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                        </div>
                     </div>
        
        `
        foodBox.classList.add('col');
        mealContainer.appendChild(foodBox);
    });

}
const searchFfood = () => {
    const inputField = document.getElementById('input-food')
    const searchTesxt = inputField.value;
    mealList(searchTesxt);
    inputField.value='';
} 

