'use client';

import { ChangeEvent, useState, FormEvent } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import Ingredients from './ingredients';

export default function Search() {


  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState<string[] | null>(null);

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

  return (
    <div className="py-10 flex flex-col gap-5">
      <form className="flex items-center gap-1 w-fit bg-slate-950 rounded-md" onSubmit={handleAddIngredient}>
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
      
      {ingredientsList ? <Ingredients list={ingredientsList} removeFunction={handleRemoveIngredient}/> : null}
    </div>
  );
}