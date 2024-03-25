'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

// Define a function to fetch recipes based on ingredients
export async function fetchRecipesByIngredients(ingredients: any) {
  noStore();
  try {
    const recipes = await sql`
      SELECT title, ingredients, instructions
      FROM recipes
      WHERE EXISTS (
        SELECT 1
        FROM jsonb_array_elements_text(processed_ingredients) AS ingredient
        WHERE ingredient = ANY(${ingredients})
        GROUP BY title
        HAVING COUNT(DISTINCT ingredient) >= ${ingredients.length - 1}
      )
      ORDER BY (
        SELECT COUNT(DISTINCT ingredient)
        FROM jsonb_array_elements_text(processed_ingredients) AS ingredient
        WHERE ingredient = ANY(${ingredients})
      ) ASC
      LIMIT 4;
    `;

    while (recipes.rows.length < 4) {
      const currentIngredient = ingredients.pop();
      const additionalRecipes = await sql`
        SELECT title, ingredients, instructions
        FROM recipes
        WHERE EXISTS (
          SELECT 1
          FROM jsonb_array_elements_text(processed_ingredients) AS ingredient
          WHERE ingredient = ${currentIngredient}
        )
        ORDER BY random()
        LIMIT ${4 - recipes.rows.length};
      `;

      recipes.rows = recipes.rows.concat(additionalRecipes.rows);
    }
    return recipes.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch recipes.');
  }
}
