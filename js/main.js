const loadFood = (inputText) => {
    console.log("type value "+inputText);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    console.log("url value "+url);
    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}

loadFood("potato");

const updateUI = (params) => {
    let container = document.getElementById("result-container");
    container.innerHTML = '';
    document.getElementById('loading-bar').style.visibility = 'visible';
    let btnPotato = document.getElementById("potato");
    let btnSoup = document.getElementById("soup");
    let btnChicken = document.getElementById("chicken");
    let btnBeef = document.getElementById("beef");

    if(btnPotato.classList.contains('bg-red-500')){
        btnPotato.classList.remove('bg-red-500');
        btnPotato.classList.add('bg-green-200');
    }

    if(btnSoup.classList.contains('bg-red-500')){
        btnSoup.classList.remove('bg-red-500');
        btnSoup.classList.add('bg-green-200');
    }

    if(btnChicken.classList.contains('bg-red-500')){
        btnChicken.classList.remove('bg-red-500');
        btnChicken.classList.add('bg-green-200');
    }

    if(btnBeef.classList.contains('bg-red-500')){
        btnBeef.classList.remove('bg-red-500');
        btnBeef.classList.add('bg-green-200');
    }

    if(params == "potato") {
        btnPotato.classList.remove('bg-green-200');
        btnPotato.classList.add('bg-red-500');
    } else if(params == "soup") {
        btnSoup.classList.remove('bg-green-200');
        btnSoup.classList.add('bg-red-500');
    } else if(params == "chicken") {
        btnChicken.classList.remove('bg-green-200');
        btnChicken.classList.add('bg-red-500');
    } else {
        btnBeef.classList.remove('bg-green-200');
        btnBeef.classList.add('bg-red-500');
    }
    loadFood(params);
}

const updateNavbarUI = () => {
    let btn = document.getElementById("potato");
    btn.classList.remove('bg-blue-500'); 
    btn.classList.add('bg-red-900'); 
}

const showMeals = (meals) => {
    // console.log('Data is: ', meals);
    document.getElementById('loading-bar').style.visibility = 'hidden';
    let container = document.getElementById("result-container");
    container.innerHTML = '';
    meals.forEach(meal => {
        let mealCard = document.createElement('div');    
        mealCard.classList = 'card card-compact bg-base-100 shadow-xl';
        
        mealCard.innerHTML = `
            <figure>
                <img src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${meal.strInstructions}" >${meal.strInstructions.slice(0,200)}...</p>
            </div>   
        `;
    container.appendChild(mealCard);
    });
}
