'use client';
import React from 'react';
import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient){
    try{
        console.log(ingredient);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        const meals = data.meals.map((meal) => ({
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb,
        }));
        return meals;
    }catch(error){
        console.log(error);
        return [];
    }
}

function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);
    return(
        <div>
        <h1 className='text-2xl font-bold'>Meal Ideas for Selected Ingredient</h1>
        <ul>
            {meals.map(meal => (
                <li key={meal.idMeal}>
                    <p>{meal.strMeal}</p>
                    <img className='w-20'  src={meal.strMealThumb} />
                </li>
            ))}
        </ul>
    </div>
    );
}



export default MealIdeas;

