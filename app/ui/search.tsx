'use client';

import { ChangeEvent, useState, FormEvent } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import Ingredients from './ingredients';
import { fetchRecipesByIngredients } from '../lib/data';
import Recipe from './recipe';

export default function Search() {
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState<string[] | null>(null);
  const [recipe, setRecipe] = useState<{title: string, ingredients: string[], instructions: string} | null>(null);

  const handleIngredientInput = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Check if the entered value contains any numbers
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setIngredient(value);
    }
  }

  const handleAddIngredient = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (ingredient.trim() !== "") { 
      setIngredientsList(prevIngredients => prevIngredients ? [...prevIngredients, ingredient] : [ingredient]);
      setIngredient("");
    }
  }

  const handleRemoveIngredient = (id:string) => {
    setIngredientsList(prevIngredients =>
      prevIngredients ? prevIngredients.filter(ingredient => ingredient !== id) : null
    );
  }

  const handleSearch = async () => {
    if (ingredientsList) {
      try {
        const recipeQuery = await fetchRecipesByIngredients(ingredientsList);
        const recipeResult = recipeQuery[0];
        const formattedRecipe = {
          title: recipeResult.title,
          ingredients: recipeResult.ingredients,
          instructions: recipeResult.instructions
        };
        setRecipe(formattedRecipe);
      } catch (error) {
        console.error('Error searching recipes:', error);
      }
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className="py-5 flex flex-col items-start gap-5 md:w-1/2">
        <form autoComplete="off" className="flex items-center gap-1 w-fit bg-slate-950 rounded-md" onSubmit={handleAddIngredient}>
          <label htmlFor="ingredientInput" className="sr-only">
            Ingredient Input
          </label>
          <input
            id='ingredientInput'
            className="bg-slate-950 rounded-md py-2 pl-5 pr-1 placeholder:text-gray-500 h-[50px] outline-none"
            value={ingredient}
            placeholder="Enter Ingredient"
            onChange={handleIngredientInput}
          />
          <button 
          className='rounded-md px-2 group h-[50px]' 
          type="submit"
          >
            <PlusIcon className='size-8 text-gray-500 group-hover:text-slate-200 group-hover:animate-pulse'/>
          </button>
        </form>
        
        {ingredientsList ? 
          <Ingredients list={ingredientsList} removeFunction={handleRemoveIngredient}/> 
          : null
        }

        <button className="border border-slate-950 hover:border-slate-200 bg-slate-950 rounded-md py-2 px-4 duration-300"onClick={handleSearch}>
          <p>Search Recipes</p>
        </button>
      </div>
     {recipe? 
      <Recipe 
        ingTitle={recipe.title} 
        ings={recipe.ingredients} 
        ingInstructions={recipe.instructions}
      /> 
     : null}
    </div>
  );
}