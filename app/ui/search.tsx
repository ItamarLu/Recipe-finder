'use client';

import { ChangeEvent, useState, FormEvent } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import Ingredients from './ingredients';
import { fetchRecipesByIngredients } from '../lib/data';
import Recipe from './recipe';
import OtherRecipes from './otherRecipes';
import { RecipeSkeleton, RecipesSkeleton } from './skeletons';

export default function Search() {
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState<string[] | null>(null);
  const [recipe, setRecipe] = useState<{title: string, ingredients: string[], instructions: string} | null>(null);
  const [otherRecipes, setOtherRecipes] = useState<object[] | null>(null)
  const [isSearching, setIsSearching] = useState(false);

  const handleIngredientInput = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().trim();
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setIngredient(value);
    }
  }

  const handleAddIngredient = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (ingredient !== "") {
      const filteredIngredients = [(ingredient as string).trim()].filter(ing => !(ingredientsList as string[] ?? []).includes(ing));
      setIngredientsList(prevIngredients => [...(prevIngredients ?? []), ...filteredIngredients]);
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
      setIsSearching(true);
      try {
        const recipeQuery = await fetchRecipesByIngredients(ingredientsList);
        const formattedRecipe = {
          title: recipeQuery[0].title,
          ingredients: recipeQuery[0].ingredients,
          instructions: recipeQuery[0].instructions
        };
        const formattedOtherRecipes = [
          recipeQuery[1],
          recipeQuery[2],
          recipeQuery[3],
        ]
        setRecipe(formattedRecipe);
        setOtherRecipes(formattedOtherRecipes);
      } catch (error) {
        console.error('Error searching recipes:', error);
      } finally {
        setIsSearching(false);
      }
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className="flex flex-col items-start gap-5 md:w-1/2">
          <form autoComplete="off" className="flex items-center gap-1 w-fit bg-gradient-to-br from-red-500 to-orange-500 rounded-md" onSubmit={handleAddIngredient}>
            <label htmlFor="ingredientInput" className="sr-only">
              Ingredient Input
            </label>
            <input
              id='ingredientInput'
              className="bg-gradient-to-br from-red-500 to-orange-500 rounded-md py-2 pl-5 pr-1 placeholder:text-gray-200 h-[50px] outline-none text-slate-100 w-full"
              value={ingredient}
              placeholder="Enter Ingredient"
              onChange={handleIngredientInput}
            />
            <button 
            className='rounded-md px-2 group h-[50px]' 
            type="submit"
            >
              <PlusIcon className='size-8 text-gray-200 group-hover:text-red-900 duration-200'/>
            </button>
          </form>
          
          {ingredientsList ? 
            <Ingredients list={ingredientsList} removeFunction={handleRemoveIngredient}/> 
            : null
          }

          {(ingredientsList && ingredientsList.length > 0) ? 
            <button className="border-2 border-red-500 hover:border-red-900 bg-gradient-to-br from-red-500 to-orange-500 rounded-md py-2 px-4 duration-300"onClick={handleSearch}>
              <p className='text-slate-100'>Search Recipes</p>
            </button> : null
          }
        </div>
        {isSearching? (
            <RecipeSkeleton />
          ) : ( recipe? 
            <Recipe
              ingTitle={recipe.title}
              ings={recipe.ingredients}
              ingInstructions={recipe.instructions}
            /> : null
          )}
      </div>
      {isSearching? (
          <RecipesSkeleton />
       ) : ( otherRecipes? 
          <div className='flex flex-col gap-3 items-center'>
            <h1 className='text-red-500 font-medium'>Other Options</h1>
            <OtherRecipes otherRecipes={otherRecipes} />
          </div> : null
        )}
    </div>
  );
}